package xyz.deepmez.backend.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.*;
import org.tensorflow.*;

import java.io.InputStream;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)//允许跨域；Cookie有效期（秒）
public class Mnist {
    //获得从客户端参数解析float矩阵
    public static float[][] getImage(Map params) {
        String img0 = (String) params.get("img");
        img0 = img0.substring(1, img0.length() - 1);
        String[] img = img0.split(",");

        //转换成为数组
        float[][] input = new float[1][img.length];
        for (int i = 0; i < img.length; i++) {
            input[0][i] = (Float.parseFloat(img[i])) / 255;
        }
        return input;
    }

    //得到预测结果
    public int getResult(float[][] input) {
        int number = -1;
        try {
            // 文件输入流
            InputStream pbFile = this.getClass().getClassLoader().getResourceAsStream("model.pb");
            //变成byte数组
            byte[] graphBytes = IOUtils.toByteArray(pbFile);
            // 定义图
            Graph graph = new Graph();
            // 加载权重
            graph.importGraphDef(graphBytes);
            // 建立会话
            Session session = new Session(graph);
            //构建x
            Tensor input_x = Tensor.create(input);
            // 运行
            Tensor<?> out = session.runner().feed("input_x", input_x).fetch("inference").run().get(0);
            // 获得数据
            int[] kk = new int[1];
            out.copyTo(kk);
            number = kk[0];
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return number;
    }

    @PostMapping("/post")
    public String post(@RequestBody Map params) {
        System.out.println("-new request-");
        float[][] input = getImage(params);
        int result = getResult(input);
        System.out.println("result : " + result);
        return result + "";
    }
}

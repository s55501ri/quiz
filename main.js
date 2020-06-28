let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let ichi = document.getElementById("ichi");
let ni = document.getElementById("ni");
let sann = document.getElementById("sann");
let yonn = document.getElementById("yonn");
let cnt = 30;
let sco = 0;
let flag = true;
//タイマー処理
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア：" + sco + "｜終了";
    que.textContent = "時間切れ";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = [
  "日本",
  "中国",
  "インド",
  "韓国",
  "ベトナム",
  "トルコ",
  "アフガニスタン",
  "バングラデシュ",
  "シンガポール",
  "ネパール",
];
let seikai = new Array(max);
seikai = ["1", "2", "3", "4", "1", "3", "2", "4", "3", "1"];
//1をクリックしたとき
ichi.addEventListener("click", () => {
  if (flag) {
    console.log("ichi");
    if (seikai[num] == "1") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        cho.textContent =
          "1." +
          "日本" +
          " " +
          "2." +
          "中国" +
          " " +
          "3." +
          "トルコ" +
          " " +
          "4." +
          "ネパール";
        logo.src = "img/logo" + num + ".png";
      }, 500);
      5;
    } else {
      que.textContent = "問題の回答終了！";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
//2をクリックしたとき
ni.addEventListener("click", () => {
  if (flag) {
    console.log("ni");
    if (seikai[num] == "2") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        cho.textContent =
          "1." +
          "韓国" +
          " " +
          "2." +
          "日本" +
          " " +
          "3." +
          "インド" +
          " " +
          "4." +
          "バングラデシュ";
        logo.src = "img/logo" + num + ".png";
      }, 500);
      5;
    } else {
      que.textContent = "問題の回答終了！";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
//3をクリックしたとき
sann.addEventListener("click", () => {
  if (flag) {
    console.log("sann");
    if (seikai[num] == "3") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        cho.textContent =
          "1." +
          "ネパール" +
          " " +
          "2." +
          "アフガニスタン" +
          " " +
          "3." +
          "インド" +
          " " +
          "4." +
          "韓国";
        logo.src = "img/logo" + num + ".png";
      }, 500);
      5;
    } else {
      que.textContent = "問題の回答終了！";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});
//4をクリックしたとき
yonn.addEventListener("click", () => {
  if (flag) {
    console.log("yonn");
    if (seikai[num] == "4") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1);
        cho.textContent =
          "1." +
          "ベトナム" +
          " " +
          "2." +
          "バングラデシュ" +
          " " +
          "3." +
          "シンガポール" +
          " " +
          "4." +
          "中国";
        logo.src = "img/logo" + num + ".png";
      }, 500);
      5;
    } else {
      que.textContent = "問題の回答終了！";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう！";
        logo.src = "img/clear.png";
      }
    }
  }
});

//　日本　バングラデシュ　中国　インド　ネパール　韓国　シンガポール
//  トルコ　アフガニスタン　ベトナム

import * as MyPPTX from "./aggregator.js";
import fs from "fs";
import rl from "readline";

async function main(params) {
  const songVerses = await patchData(params.file);
  console.log(songVerses);
  const orderOfVerses = [0, 1, 0, 2, 0];
  const songVersesPatched = patchVerse(songVerses, orderOfVerses);
  console.log(songVersesPatched);
  executePowerpoint(songVersesPatched);
}

function patchVerse(songVerses, orderOfVerses) {
  let patchedSongVerses = [];
  for (let i = 0; i < orderOfVerses.length; i++) {
    for (let j = 0; j < songVerses.length; j++) {
      if (songVerses[j].type === orderOfVerses[i]) {
        patchedSongVerses.push(songVerses[j].verse);
      }
    }
  }
  console.log("patchedSongVerses: ", patchedSongVerses);
  return patchedSongVerses;
}
function patchData(file) {
  return new Promise((resolve, reject) => {
    let songVerses = [];
    let myInterface = rl.createInterface({
      input: fs.createReadStream(file),
    });

    // Process each line
    myInterface.on("line", function (line) {
      const verseType = MyPPTX.defineVerseType(line);
      songVerses.push({
        type: verseType,
        verse: new MyPPTX.Verse(line),
      });
    });

    // Resolve promise when the file reading is complete
    myInterface.on("close", function () {
      resolve(songVerses);
    });
    myInterface.on("error", function (err) {
      reject(err);
    });
  });
}
function executePowerpoint(orderOfLyrics) {
  console.log("orderOfLyrics: ", orderOfLyrics);
  // MAIN
  let nhapLe = new MyPPTX.Song(
    "GIAI KHÚC DÂNG TIẾN 4",
    "Nhập lễ",
    orderOfLyrics
  );
  let dangLe = new MyPPTX.Song(
    "GIAI KHÚC DÂNG TIẾN 4",
    "Dâng lễ",
    orderOfLyrics
  );
  let hiepLe = new MyPPTX.Song(
    "GIAI KHÚC DÂNG TIẾN 4",
    "Hiệp lễ",
    orderOfLyrics
  );
  let chaMe = new MyPPTX.Song("GIAI KHÚC DÂNG TIẾN 4", "", orderOfLyrics);
  let ketLe = new MyPPTX.Song("GIAI KHÚC DÂNG TIẾN 4", "Kết lễ", orderOfLyrics);
  let transition = new MyPPTX.Transition();
  let eucharisticYouthSong = new MyPPTX.EucharisticYouthSong();
  let kinhTruocRuocLe = new MyPPTX.KinhTruocRuocLe();
  let kinhSauRuocLe = new MyPPTX.KinhSauRuocLe();
  let kinhVinhDanh = new MyPPTX.KinhVinhDanh();
  let kinhThuongXot = new MyPPTX.KinhThuongXot();
  let alleluia = new MyPPTX.DapCaVaAlleluia(
    "ALLELUIA - ALLELUIA",
    "Chúa phán: “Thầy là đường, là sự thật và là sự sống. Không ai đến được với Cha mà lại không qua Thầy”."
  );
  let dapCa = new MyPPTX.DapCaVaAlleluia(
    "ĐÁP CA",
    "Tôi sẽ bước đi trước Thiên Nhan của Chúa."
  );
  let tinMung = new MyPPTX.TinMung("Mc 8, 27-35");
  let kinhDucChuaThanhThan = new MyPPTX.KinhDucChuaThanhThan();
  let kinhMuoiDieuRan = new MyPPTX.KinhDanhSo(
    "KINH MƯỜI ĐIỀU RĂN",
    {
      intro: "Đạo Đức Chúa Trời có Mười Điều răn:\n",
      thuTu: "Thứ nhất:",
      noiDung:
        " Thờ phượng một Đức Chúa Trời và kính mến Người trên hết mọi sự.",
    },
    [
      [
        "Thứ hai: Chớ kêu tên Đức Chúa Trời vô cớ.",
        "Thứ ba: Giữ ngày Chúa Nhật.",
        "Thứ bốn: Thảo kính cha mẹ.",
      ],
      [
        "Thứ năm: Chớ giết người.",
        "Thứ sáu: Chớ làm sự dâm dục.",
        "Thứ bảy: Chớ lấy của người.",
      ],
      [
        "Thứ tám : Chớ làm chứng dối.",
        "Thứ chín: Chớ muốn vợ chồng người.",
        "Thứ mười: Chớ tham của người.",
      ],
    ],
    {
      lastPage: {
        noiDung:
          "Mười Điều răn ấy tóm về hai điều mà chớ: trước kính mến một Đức Chúa Trời trên hết mọi sự, sau là yêu người như mình ta vậy. ",
        end: "Amen.",
      },
    }
  );
  let kinhNamDieuRan = new MyPPTX.KinhDanhSo(
    "KINH NĂM ĐIỀU RĂN",
    {
      intro: "Hội Thánh có năm điều răn:\n",
      thuTu: "Thứ nhất:",
      noiDung:
        " Tham dự Thánh Lễ và kiêng việc xác ngày Chúa Nhật cùng các ngày lễ buộc.",
    },
    [
      [
        "Thứ hai: Xưng tội trong một năm ít là một lần.",
        "Thứ ba: Chịu Mình Thánh Đức Chúa Giêsu trong mùa Phục Sinh.",
      ],
      [
        "Thứ bốn: Kiêng thịt và giữ chay những ngày Hội Thánh buộc.",
        "Thứ năm: Đóng góp theo khả năng cho nhu cầu vật chất của Hội Thánh.",
      ],
    ]
  );
  let kinhTamMoiPhucThat = new MyPPTX.KinhDanhSo(
    "KINH\nTÁM MỐI PHÚC THẬT",
    {
      intro: "Phúc Thật Tám Mối:\n",
      thuTu: "Thứ nhất:",
      noiDung:
        " Ai có lòng khó khăn ấy là phúc thật, vì chưng Nước Ðức Chúa Trời là của mình vậy.",
    },
    [
      [
        "Thứ hai: Ai hiền lành ấy là phúc thật, vì chưng sẽ được đất Ðức Chúa Trời làm của mình vậy.",
      ],
      [
        "Thứ ba: Ai khóc lóc ấy là phúc thật, vì chưng sẽ được yên ủi vậy.",
        "Thứ bốn: Ai khao khát nhân đức trọn lành ấy là phúc thật, vì chưng sẽ được no đủ vậy.",
      ],
      [
        "Thứ năm: Ai thương xót người ấy là phúc thật, vì chưng sẽ được thương xót vậy.",
      ],
      [
        "Thứ sáu: Ai giữ lòng sạch sẽ ấy là phúc thật, vì chưng sẽ được thấy mặt Ðức Chúa Trời vậy.",
      ],
      [
        "Thứ bảy: Ai làm cho người hòa thuận ấy là phúc thật, vì chưng sẽ được gọi là con Ðức Chúa Trời vậy.",
      ],
      [
        "Thứ tám: Ai chịu khốn nạn vì Ðạo ngay ấy là phúc thật, vì chưng Nước Ðức Chúa Trời là của mình vậy.",
      ],
    ],
    { tammoiphuc: true }
  );
  let moiCacEmQuy = new MyPPTX.MoiCacEmQuy();
  let navigationPage = new MyPPTX.NavigationPage();
  let layChienThienChua = new MyPPTX.LayChienThienChua();
  let thanhThanhThanh = new MyPPTX.ThanhThanhThanh();
  let mauNhiemDucTin = new MyPPTX.MauNhiemDucTin();
  let baiDocVaTinMung = new MyPPTX.BaiDocVaTinMung(
    "Gc 2, 14-18",
    "Mc 8, 27-35"
  );
  let myPowerpoint = new MyPPTX.PowerpointFile(
    [
      transition,
      moiCacEmQuy,
      kinhDucChuaThanhThan,
      kinhMuoiDieuRan,
      kinhNamDieuRan,
      kinhTamMoiPhucThat,
      navigationPage,
      baiDocVaTinMung,
      transition,
      nhapLe,
      transition,
      kinhThuongXot,
      kinhVinhDanh,
      transition,
      dapCa,
      transition,
      alleluia,
      tinMung,
      transition,
      dangLe,
      transition,
      thanhThanhThanh,
      transition,
      mauNhiemDucTin,
      transition,
      layChienThienChua,
      transition,
      kinhTruocRuocLe,
      hiepLe,
      transition,
      chaMe,
      kinhSauRuocLe,
      transition,
      ketLe,
      transition,
      eucharisticYouthSong,
    ],
    "Green"
  );
  myPowerpoint.write();
  myPowerpoint.saveFile("DEMO");
  console.log("Done");
}
main({ file: "nhapLe.txt" });

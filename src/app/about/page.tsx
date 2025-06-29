import React from "react";
import Header from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <main className="h-auto">
      <div className="absolute inset-0 -z-1 h-[80vh] w-full mx-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex justify-center ">
          <div className="w-[1200px]">
            <div className="flex items-center justify-center relative z-0">
              <div className="w-64 h-32 blur-[200px] bg-[#4B4EE7] absolute "></div>
            </div>
            <Header />
            <div className="w-[1200px]">
              <h1 className="text-center text-[50px] font-semibold mt-20">
                Hakkımızda
              </h1>
              <p className="text-center text-xl mt-2 text-gray-500">
                Bu proje, <strong>GitHub Analist Sitesi</strong> olarak Harun
                Demirci tarafından{" "}
                <strong>Isparta Uygulamalı Bilimler Üniversitesi</strong>’nde
                öğrenim gördüğü süre boyunca geliştirilmiştir. TÜBİTAK projesi
                kapsamında hazırlanmıştır. Projenin amacı, yazılım
                geliştiricilerin GitHub verilerini analiz ederek daha etkili ve
                verimli bir şekilde değerlendirme yapmalarını sağlamaktır.
                <br />
                Geliştirici ekibimiz ile birlikte kullanıcı dostu bir arayüz ve
                güçlü bir analiz altyapısı sunmayı hedefledik.
              </p>
            </div>
            <div className="pt-24">
              <h2 className="text-[32px] font-semibold">Bilgi Al!</h2>
              <p className="text-gray-500 pt-1">
                Proje hakkında bilgi almak isterseniz benimle iletişime
                geçebilirsiniz.
              </p>
              <div className="mt-6">
                <button className="bg-black text-white rounded-lg px-4 py-1.5 flex items-center gap-2">
                  <p className="text-lg">İletişime Geç</p>
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LinaFoodLandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-[#3D2B24]">
      {/* Hero */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-[#FFE2D1] text-[#8B6F60] px-4 py-2 rounded-full text-sm font-medium mb-4">
              🐾 LINE 美食陪伴 Bot
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              今天吃什麼 × 莉娜
            </h1>

            <p className="text-lg md:text-xl text-[#6F5A4E] leading-relaxed mb-8">
              不知道今天吃什麼？
              <br />
              交給莉娜幫你決定 ✨
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://lin.ee/Z51H0aY"
                target="_blank"
                className="bg-[#A86E6C] hover:opacity-90 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition"
              >
                🍽️ 立即開始
              </a>

              <a
                href="#features"
                className="bg-white border-2 border-[#A86E6C] text-[#A86E6C] px-8 py-4 rounded-2xl text-lg font-bold transition"
              >
                查看功能
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[40px] shadow-2xl p-5 border-4 border-[#FFE2D1]">
              <img
                src="https://raw.githubusercontent.com/aswe123000/lina-images/main/ChatGPT%20Image%202026%E5%B9%B45%E6%9C%8811%E6%97%A5%20%E4%B8%8B%E5%8D%8809_27_20%20(2).png"
                alt="莉娜"
                className="w-full rounded-3xl"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#FFE2D1] px-5 py-4 rounded-2xl shadow-lg">
              <p className="font-bold">🐾 莉娜幫你抽店</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">功能介紹</h2>
            <p className="text-[#8B6F60] text-lg">
              不只是抽店，而是陪你吃飯的 AI 貓咪 🐾
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🍽️',
                title: '附近抽店',
                desc: '分享位置後，莉娜幫你抽附近美食。'
              },
              {
                icon: '❤️',
                title: '收藏店家',
                desc: '喜歡的店直接收藏，下次快速再抽。'
              },
              {
                icon: '💘',
                title: '情侶模式',
                desc: '不知道誰決定？交給莉娜。'
              },
              {
                icon: '🎲',
                title: '今日運勢',
                desc: '今天適合吃什麼，讓莉娜幫你算。'
              },
              {
                icon: '📸',
                title: '拍菜單幫你選',
                desc: '拍菜單給莉娜，直接推薦餐點。'
              },
              {
                icon: '🐾',
                title: '莉娜陪伴感',
                desc: '不是冷冰冰工具，而是可愛貓咪夥伴。'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF7EC] border-2 border-[#FFE2D1] rounded-3xl p-8 hover:-translate-y-1 transition shadow-sm"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#6F5A4E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            像真正 App 一樣的體驗 ✨
          </h2>

          <p className="text-lg text-[#8B6F60] mb-12">
            莉娜會幫你抽店、收藏、推薦，甚至陪你決定今天吃什麼。
          </p>

          <div className="bg-white rounded-[40px] p-6 shadow-2xl border-4 border-[#FFE2D1] max-w-md mx-auto">
            <div className="bg-[#FFF7EC] rounded-3xl p-5 text-left">
              <p className="text-[#8B6F60] mb-4">🐾 莉娜幫你抽到了！</p>

              <div className="bg-white rounded-2xl p-4 mb-4">
                <p className="font-bold text-xl mb-2">🍜 麵屋武藏</p>
                <p className="text-sm text-[#6F5A4E]">⭐ 4.5</p>
                <p className="text-sm text-[#6F5A4E] mt-1">
                  📍 台中市西屯區
                </p>
              </div>

              <div className="bg-[#FFE2D1] rounded-2xl p-4 text-sm">
                今天就吃這間吧 ฅ^•ﻌ•^ฅ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#FFE2D1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            今天不知道吃什麼？
          </h2>

          <p className="text-xl text-[#6F5A4E] mb-10">
            讓莉娜幫你決定 ✨
          </p>

          <a
            href="https://lin.ee/Z51H0aY"
            target="_blank"
            className="inline-block bg-[#A86E6C] hover:opacity-90 text-white px-10 py-5 rounded-3xl text-xl font-bold shadow-xl transition"
          >
            🐾 加入 LINE 開始使用
          </a>
        </div>
      </section>
    </div>
  );
}

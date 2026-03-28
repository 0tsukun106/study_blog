function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* カード */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        {/* タイトル */}
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-orange-500 pl-3">
          ABOUT
        </h2>

        {/* プロフィール */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="${import.meta.env.BASE_URL}/pictures/icon.jpg"
            alt="プロフィール画像"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div>
            <h3 className="text-lg font-semibold">たら</h3>
            <p className="text-sm text-gray-500">札幌の大学3年生</p>
          </div>
        </div>

        {/* 本文 */}
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>IT初心者でフロントエンドを勉強中。</p>

          <p>
            大学の専攻は半導体で、
            <span className="text-red-500 font-semibold">勉強</span>
            が唯一の趣味です！
          </p>

          <p>
            最近は心理学や民俗学にハマっていて、
            大学の勉強と一緒に発信しています。
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

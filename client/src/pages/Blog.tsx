import { useEffect } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";

const ARTICLE_URL = "/blog/ai-employees-for-small-business";

function setMeta(name: string, content: string, property = false) {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Blog() {
  useEffect(() => {
    document.title = "مقالات الذكاء الاصطناعي للمشاريع الصغيرة | حزمة موظفي الذكاء الاصطناعي";
    setMeta("description", "مقالات عملية عن موظفي الذكاء الاصطناعي، ChatGPT للأعمال، والتسويق وخدمة العملاء للمشاريع الصغيرة.");
    setMeta("og:title", document.title, true);
    setMeta("og:description", "أفكار عملية لاستخدام الذكاء الاصطناعي في المهام اليومية للمشاريع الصغيرة.", true);
    setMeta("og:url", `${window.location.origin}/blog/`, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", `${window.location.origin}/blog/`);
  }, []);

  return (
    <main className="blog-page" dir="rtl">
      <div className="blog-page__inner">
        <a className="blog-page__back" href="/">العودة إلى الصفحة الرئيسية <ArrowLeft size={16} /></a>
        <div className="blog-page__eyebrow"><BookOpen size={16} /> معرفة عملية لصاحب المشروع</div>
        <h1>مقالات عن الذكاء الاصطناعي للمشاريع الصغيرة</h1>
        <p className="blog-page__intro">أدلة مختصرة تساعدك على تحويل استخدام ChatGPT من أسئلة متفرقة إلى أدوار وسير عمل قابلة للمراجعة.</p>
        <a className="blog-card" href={ARTICLE_URL}>
          <span className="blog-card__type">دليل أساسي</span>
          <h2>موظفو الذكاء الاصطناعي: ما هم وكيف يمكن لصاحب المشروع استخدامها؟</h2>
          <p>افهم الفرق بين المحادثة العادية وموظف AI، وتعلم كيف تبني سير عمل يبدأ من سياق المشروع وينتهي بمخرج قابل للمراجعة.</p>
          <span className="blog-card__link">اقرأ المقال <ArrowLeft size={17} /></span>
        </a>
      </div>
    </main>
  );
}

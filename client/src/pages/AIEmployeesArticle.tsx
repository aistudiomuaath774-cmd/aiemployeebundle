import { useEffect } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ARTICLE_URL = "https://aiemployeebundle.vercel.app/blog/ai-employees-for-small-business";
const CHECKOUT_URL = "https://payhip.com/b/p7vMr";

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

function ArticleMetadata() {
  useEffect(() => {
    const title = "موظفو الذكاء الاصطناعي: ما هم وكيف يمكن لصاحب المشروع استخدامها؟";
    const description = "دليل عملي يشرح موظفي الذكاء الاصطناعي، وسياق المشروع، وسير العمل، وبوابات الجودة، مع أمثلة للمحتوى والإعلانات والمبيعات وخدمة العملاء والتخطيط.";
    document.title = `${title} | حزمة موظفي الذكاء الاصطناعي`;
    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", ARTICLE_URL, true);
    setMeta("og:type", "article", true);
    setMeta("og:site_name", "حزمة موظفي الذكاء الاصطناعي", true);
    setMeta("og:image", `${window.location.origin}/assets/ai-kit-hero.webp`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${window.location.origin}/assets/ai-kit-hero.webp`);
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", ARTICLE_URL);

    const existingSchema = document.getElementById("article-schema");
    const schema = existingSchema ?? document.createElement("script");
    schema.id = "article-schema";
    schema.setAttribute("type", "application/ld+json");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: ARTICLE_URL,
      image: `${window.location.origin}/assets/ai-kit-hero.webp`,
      inLanguage: "ar",
      publisher: { "@type": "Organization", name: "حزمة موظفي الذكاء الاصطناعي", url: "https://aiemployeebundle.vercel.app/" },
      mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
    });
    if (!existingSchema) document.head.appendChild(schema);

    return () => schema.remove();
  }, []);

  return null;
}

const employees = [
  ["موظف المحتوى", "لصياغة أفكار ومقالات ومنشورات تبدأ من هوية مشروعك."],
  ["موظف الإعلانات", "لبناء زوايا ورسائل إعلانية مع التمييز بين الحقائق والافتراضات."],
  ["موظف خدمة العملاء", "لتنظيم الردود مع احترام السياسات والمعلومات المؤكدة."],
  ["موظف المبيعات", "لترتيب الأسئلة والاعتراضات والخطوة التالية في المحادثة."],
  ["موظف المنتجات", "لتوضيح المشكلة والميزة والقيمة قبل كتابة وصف المنتج."],
  ["موظف العروض", "لتجميع عرض مفهوم بدل قائمة مزايا غير مترابطة."],
  ["موظف السوشيال ميديا", "لبناء مسار نشر وأفكار تناسب المنصة والجمهور."],
  ["موظف تحليل المنافسين", "لتحديد أسئلة البحث وتجنب اختراع بيانات عن المنافسين."],
  ["موظف التخطيط", "لتحويل الهدف إلى خطوات ومواعيد ونقاط مراجعة."],
  ["مدير التسويق الذكي", "لترتيب الأولويات وربط المهام التسويقية بالصورة الأكبر."],
];

export default function AIEmployeesArticle() {
  return (
    <>
      <ArticleMetadata />
      <main className="article-page" dir="rtl">
        <div className="article-page__inner">
          <a className="article-page__back" href="/blog/">كل المقالات <ArrowLeft size={16} /></a>
          <header className="article-hero">
            <span className="article-hero__eyebrow">موظفو الذكاء الاصطناعي · دليل عملي</span>
            <h1>موظفو الذكاء الاصطناعي: ما هم وكيف يمكن لصاحب المشروع استخدامها؟</h1>
            <p>حين تستخدم ChatGPT كل مرة من صفحة فارغة، يصبح عليك تذكر السياق والأسئلة ومعايير الجودة في كل محادثة. يشرح هذا الدليل كيف تحول المهمة المتكررة إلى موظف AI له دور وسياق وسير عمل ومراجعة بشرية.</p>
          </header>

          <article className="article-content">
            <p>لا يحتاج صاحب المشروع إلى أداة أخرى لمجرد أن الذكاء الاصطناعي أصبح شائعًا. ما يحتاجه غالبًا هو طريقة أكثر اتساقًا لاستخدام الأدوات الموجودة. هنا تظهر فكرة <strong>موظفو الذكاء الاصطناعي</strong>: أدوار تشغيلية داخل أداة الذكاء الاصطناعي، وليست موظفين بشريين أو برامج مستقلة تعمل دون إشراف.</p>

            <h2>ما هو موظف الذكاء الاصطناعي؟</h2>
            <p>موظف AI هو تعليمات منظمة لمهمة محددة. يعرف الدور الذي يؤديه، ومعلومات المشروع التي يجب أن يعتمد عليها، والخطوات التي يتبعها، وشكل الناتج المطلوب، ثم يمرر الناتج عبر بوابة جودة ومراجعة بشرية.</p>
            <p>بهذا المعنى، لا يكفي أن تقول: اكتب لي منشورًا. بل تزود الموظف بسياق المشروع، وتحدد الجمهور والهدف والنبرة والقيود، وتطلب منه إظهار افتراضاته وما يحتاج إلى تحقق.</p>

            <h2>لماذا تستخدم المشاريع الصغيرة موظفي الذكاء الاصطناعي؟</h2>
            <p>صاحب المشروع أو الفريق الصغير ينتقل بين المحتوى والإعلانات والردود والمبيعات والتخطيط. استخدام دور واضح لكل نوع من هذه المهام يقلل التشتت ويجعل نقطة البداية معروفة. لكنه لا يلغي التفكير أو المراجعة، ولا يضمن مبيعات أو دخلًا.</p>
            <ul><li>تبدأ المهمة بسياق محفوظ بدل شرحه من الصفر.</li><li>تتضح المعلومات الناقصة قبل بناء الناتج.</li><li>تتكرر خطوات العمل بطريقة يمكن تعديلها.</li><li>تظهر معايير الجودة قبل النشر أو الإرسال.</li></ul>

            <h2>موظف AI مقابل استخدام ChatGPT العادي</h2>
            <div className="article-compare">
              <div><strong>محادثة عادية</strong><p>سؤال سريع، سياق محدود، وناتج قد يختلف حسب ما تذكره في تلك اللحظة.</p></div>
              <div><strong>موظف ذكاء اصطناعي</strong><p>دور واضح، سياق مشروع، خطوات محددة، شكل إخراج، وبوابة جودة قبل المراجعة البشرية.</p></div>
            </div>

            <h2>كيف يعمل سير عمل موظف الذكاء الاصطناعي؟</h2>
            <p>يمكن بناء أي موظف عملي من ستة أجزاء مترابطة:</p>
            <h3>1. سياق المشروع</h3><p>اكتب ما يخص المشروع فعلًا: المنتج، الجمهور، الموقف الحالي، النبرة، الأسعار والسياسات المسموح بها. لا تضع معلومات حساسة لا تحتاجها المهمة.</p>
            <h3>2. الدور والمهمة</h3><p>حدد من هو الموظف وما المطلوب منه الآن. مهمة مثل تحليل اعتراض عميل تختلف عن مهمة كتابة إعلان، حتى لو استُخدمت الأداة نفسها.</p>
            <h3>3. سير العمل</h3><p>اطلب خطوات قابلة للفحص: فهم الطلب، فصل المؤكد عن الافتراض، تحديد النواقص، ثم بناء مسودة مناسبة.</p>
            <h3>4. الناتج</h3><p>حدد الشكل الذي يساعدك على الاستخدام: جدول، نقاط، مسودة، خيارات متعددة، أو أسئلة متابعة. الشكل الجيد يجعل المراجعة أسرع.</p>
            <h3>5. بوابة الجودة</h3><p>اجعل الموظف يتأكد من عدم اختراع أرقام أو خصومات أو وعود، ومن توافق النص مع الجمهور والسياسات. ما لا يعرفه يجب أن يصرح بأنه يحتاج إلى تحقق.</p>
            <h3>6. المراجعة البشرية</h3><p>راجع الناتج قبل اعتماده، وخصوصًا في القرارات المالية والقانونية والرسائل الحساسة والمعلومات التي لا يمكن التراجع عنها.</p>

            <h2>10 أمثلة لموظفي الذكاء الاصطناعي</h2>
            <div className="article-employees">{employees.map(([title, text], index) => <div className="article-employee" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>

            <h2>كيف تختار الموظف المناسب؟</h2>
            <p>ابدأ بالهدف لا بالأداة. إذا كان هدفك نشر محتوى، اختر موظف المحتوى. إذا كنت لا تعرف من أين تبدأ، استخدم التخطيط أو مدير التسويق الذكي لتحديد الأولوية. وإذا كان القرار حساسًا، لا تجعل الناتج الآلي هو القرار النهائي.</p>

            <h2>أخطاء شائعة</h2>
            <ul><li>طلب نتيجة عامة من دون معلومات عن المشروع.</li><li>اعتبار النص الأول نهائيًا من دون تحقق.</li><li>السماح للموظف بافتراض السعر أو الخصم أو الميزة.</li><li>إدخال بيانات حساسة لا يحتاجها العمل.</li><li>قياس النجاح بعدد الكلمات بدل ملاءمة الناتج للمهمة.</li></ul>

            <h2>مثال عملي: اعتراض عميل</h2>
            <p>إذا قال العميل: «السعر مرتفع»، يمكن لموظف خدمة العملاء أن يحدد نوع الاعتراض، ويميز المعلومات المؤكدة عن الافتراضات، ويتجنب اختراع خصم أو ضمان، ثم يقترح ردًا قابلًا للمراجعة:</p>
            <blockquote>أتفهم أن السعر قد يبدو مرتفعًا. حتى أساعدك بشكل أدق: هل المقارنة مع بديل أرخص، أم أن النتيجة المتوقعة غير واضحة بعد؟ بناءً على إجابتك أشرح لك ما يتضمنه العرض والقيمة التي يقدمها، من دون افتراض خصم غير موجود.</blockquote>
            <div className="article-review"><CheckCircle2 size={19} /><span><strong>المراجعة البشرية أولًا:</strong> راجع الناتج وتأكد من توافقه مع معلومات مشروعك قبل استخدامه.</span></div>

            <h2>الخلاصة</h2>
            <p>موظفو الذكاء الاصطناعي ليسوا بديلًا عن صاحب المشروع، بل طريقة لتنظيم استخدام الذكاء الاصطناعي للمشاريع الصغيرة. عندما تجمع سياق المشروع مع دور واضح وسير عمل وبوابة جودة، تصبح النتيجة نقطة بداية أفضل للمراجعة والتنفيذ.</p>
            <div className="article-cta">
              <div><span>تطبيق الفكرة مباشرة</span><h2>ابدأ بحزمة تضم 10 موظفين AI</h2><p>حزمة موظفي الذكاء الاصطناعي V2.1 تجمع أدوار المحتوى والإعلانات وخدمة العملاء والمبيعات والمنتجات والعروض والسوشيال والمنافسين والتخطيط.</p></div>
              <a href={CHECKOUT_URL} onClick={() => window.dispatchEvent(new CustomEvent("product_cta_click", { detail: { source: "article" } }))}>اطلع على الحزمة بسعر $19 <ArrowLeft size={17} /></a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

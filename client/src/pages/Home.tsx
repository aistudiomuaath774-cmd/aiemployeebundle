/*
 * Design direction: «غرفة العمليات الهادئة» — Arabic editorial landing page with
 * warm ivory paper, deep ink, operating green #0E6B5D, restrained saffron accents,
 * asymmetrical product storytelling, and calm conversion-focused interactions.
 */

import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  CircleCheck,
  FileText,
  Layers3,
  Menu,
  MousePointer2,
  Play,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const CHECKOUT_URL = "https://payhip.com/b/p7vMr";

const roles = [
  { number: "01", title: "موظف المحتوى", task: "يحوّل أفكارك وسياق مشروعك إلى محتوى قابل للنشر." },
  { number: "02", title: "موظف الإعلانات", task: "يساعدك على بناء زوايا ورسائل إعلانية أوضح." },
  { number: "03", title: "موظف خدمة العملاء", task: "يصيغ ردودًا متسقة تراعي نبرة مشروعك وسياساته." },
  { number: "04", title: "موظف المبيعات", task: "يرتب المحادثات والعروض من أول سؤال إلى الخطوة التالية." },
  { number: "05", title: "موظف المنتجات", task: "ينظم أفكار المنتج وميزاته وقيمته بطريقة مفهومة." },
  { number: "06", title: "موظف العروض", task: "يبني عروضًا أكثر تركيزًا بدل تجميع مزايا بلا ترتيب." },
  { number: "07", title: "موظف السوشيال ميديا", task: "يضع لك مسارات نشر وأفكارًا مناسبة لكل منصة." },
  { number: "08", title: "موظف تحليل المنافسين", task: "يقرأ المشهد حولك بأسئلة محددة دون اختراع بيانات." },
  { number: "09", title: "موظف التخطيط", task: "يحوّل هدفك الكبير إلى خطوات ومواعيد يمكن مراجعتها." },
  { number: "10", title: "مدير التسويق الذكي", task: "يجمع الصورة ويقترح ترتيبًا عمليًا للأولويات." },
];

const included = [
  "دليل Start Here للانطلاقة بدون حيرة",
  "بطاقة هوية مشروعك لتغذية كل موظف بالسياق",
  "10 موظفين جاهزين للنسخ والاستخدام",
  "بطاقة إعداد الموظف قبل بدء أي مهمة",
  "خطة استخدام عملية لمدة 30 يومًا",
  "30 أمر تحسين سريع للمراجعة والتطوير",
  "قائمة مراجعة نهائية قبل اعتماد المخرجات",
  "ترخيص استخدام واضح لمشروعك",
];

const bonuses = [
  { number: "01", title: "خطة 30 يومًا", text: "إيقاع بسيط يساعدك على تحويل الحزمة إلى عادة تشغيل." },
  { number: "02", title: "أوامر تحسين سريعة", text: "30 نقطة بداية عندما تحتاج إلى تعديل النتيجة بدل إعادة كل شيء." },
  { number: "03", title: "بطاقة إعداد الموظف", text: "أسئلة مختصرة لتمنح الموظف المعلومات التي يحتاجها فعلًا." },
  { number: "04", title: "قائمة مراجعة نهائية", text: "مراجعة أخيرة قبل أن تنشر أو ترسل أو تعتمد المخرج." },
];

const faqs = [
  { q: "هل أحتاج إلى برمجة؟", a: "لا. المنتج مصمم للاستخدام داخل أدوات الذكاء الاصطناعي النصية بطريقة النسخ واللصق." },
  { q: "هل أحتاج إلى خبرة في كتابة الـ Prompts؟", a: "لا. التعليمات الرئيسية مكتوبة لتُنسخ كما هي، ويمكنك البدء بموظف واحد فقط." },
  { q: "هل الموظفون مستقلون بالكامل؟", a: "لا. هم أدوار وتعليمات تشغيلية داخل أداة الذكاء الاصطناعي، وليست أنظمة برمجية تعمل وحدها." },
  { q: "هل يعمل بالعربية؟", a: "نعم، والتعليمات مصممة للاستخدام بالعربية مع ترك المصطلحات التقنية الإنجليزية عندما تكون مفيدة." },
  { q: "هل يضمن زيادة المبيعات أو الأرباح؟", a: "لا. جودة النتيجة تعتمد على معلومات مشروعك، المهمة، المراجعة والتنفيذ. الحزمة تمنحك مسارًا أوضح، لا وعدًا بنتيجة مضمونة." },
  { q: "هل أستطيع استخدام المخرجات تجاريًا؟", a: "نعم، يمكنك استخدام المخرجات في مشروعك، مع مسؤوليتك عن مراجعتها والتأكد من حقوق أي مواد أو بيانات خارجية." },
  { q: "هل أستطيع إعادة بيع الحزمة؟", a: "لا. الشراء يمنحك حق الاستخدام وفق الترخيص، وليس حق إعادة البيع أو إعادة التغليف." },
];

function CheckoutLink({ children, className = "", onNavigate }: { children: React.ReactNode; className?: string; onNavigate?: () => void }) {
  const handleClick = () => {
    onNavigate?.();
  };

  return (
    <a href={CHECKOUT_URL} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

function BrandMark() {
  return <span className="mark-glyph" aria-hidden="true"><i /><i /><i /><b /></span>;
}

function SectionLabel({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="section-label">
      {number && <span className="section-label__number">{number}</span>}
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className={`site-header ${menuOpen ? "site-header--open" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="brand" aria-label="حزمة موظفي الذكاء الاصطناعي">
            <span className="brand-mark"><BrandMark /></span>
            <span className="brand-name">حزمة موظفي<br /><strong>الذكاء الاصطناعي</strong></span>
          </a>

          <nav className={`main-nav ${menuOpen ? "main-nav--visible" : ""}`} aria-label="التنقل الرئيسي">
            <a href="#roles" onClick={closeMenu}>الموظفون</a>
            <a href="#how-it-works" onClick={closeMenu}>كيف تعمل</a>
            <a href="#demo" onClick={closeMenu}>مثال عملي</a>
            <a href="#included" onClick={closeMenu}>ماذا تحصل عليه</a>
            <a href="#faq" onClick={closeMenu}>الأسئلة الشائعة</a>
          </nav>

          <div className="header-actions">
            <CheckoutLink className="button button--small button--dark" onNavigate={closeMenu}>
              احصل على الحزمة <ArrowLeft size={16} strokeWidth={1.8} />
            </CheckoutLink>
            <button className="menu-toggle" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__inner content-width">
            <div className="hero__copy">
              <div className="eyebrow"><span className="eyebrow__dot" /> حزمة تشغيل عربية لصاحب المشروع</div>
              <h1>لا تبدأ من<br /><em>صفحة فارغة.</em></h1>
              <p className="hero__lead">10 موظفين ذكاء اصطناعي جاهزين لمساعدتك في التسويق، المحتوى، المبيعات وخدمة العملاء — انسخ، أدخل معلوماتك، وابدأ.</p>
              <div className="hero__actions">
                <CheckoutLink className="button button--primary">
                  ابدأ بموظف واحد <ArrowLeft size={18} strokeWidth={2} />
                </CheckoutLink>
                <a href="#included" className="text-link"><span className="text-link__icon"><Play size={12} fill="currentColor" /></span> استعرض محتويات الحزمة</a>
              </div>
              <div className="hero__fineprint"><CircleCheck size={15} /> دفع مرة واحدة <span /> <CircleCheck size={15} /> تعمل بالعربية <span /> <CircleCheck size={15} /> بدون برمجة</div>
            </div>

            <div className="hero__visual">
              <div className="hero__visual-note hero__visual-note--top"><span>ملف تشغيل</span><strong>01—10</strong></div>
              <div className="hero__image-wrap">
                <img src="/assets/ai-kit-hero.webp" alt="مجموعة بطاقات تشغيل لحزمة موظفي الذكاء الاصطناعي" className="hero__image" />
                <div className="hero__stamp"><span>AI</span><small>EMPLOYEE<br />KIT</small></div>
              </div>
              <div className="hero__visual-note hero__visual-note--bottom"><span>جاهز للنسخ</span><ArrowUpLeft size={19} /></div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="مزايا الحزمة">
          <div className="signal-strip__inner content-width">
            <div><strong>10</strong><span>موظفين متخصصين</span></div>
            <div><strong>04</strong><span>بونصات تشغيل</span></div>
            <div><strong>01</strong><span>سياق مشروع واضح</span></div>
            <div><strong>∞</strong><span>مهام يمكنك تكرارها</span></div>
          </div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="content-width intro__grid">
            <div className="intro__aside">
              <SectionLabel number="01">لماذا هذه الحزمة؟</SectionLabel>
              <div className="aside-line" />
              <p>المشكلة ليست أن الذكاء الاصطناعي غير قادر على مساعدتك؛ المشكلة أنك قد لا تعرف ماذا تطلب، وما المعلومات التي تعطيها، ومن أين تبدأ.</p>
            </div>
            <div className="intro__main">
              <h2>بدل أن تجمع عشرات الـ Prompts، <em>اختر الدور المناسب.</em></h2>
              <p>هذه الحزمة تحول المهام المتكررة إلى أدوار واضحة. لكل موظف تعليماته وسياقه ونقطة بداية تساعدك على الوصول إلى نتيجة يمكن مراجعتها وتطويرها.</p>
              <a href="#how-it-works" className="arrow-link">شاهد طريقة العمل <ArrowLeft size={17} /></a>
            </div>
          </div>
        </section>

        <section className="roles-section section-pad section-pad--tight" id="roles">
          <div className="content-width">
            <div className="section-heading section-heading--split">
              <div><SectionLabel number="02">داخل الحزمة</SectionLabel><h2>لكل مهمة، <em>موظف.</em></h2></div>
              <p>ابدأ بالموظف الذي يناسب احتياجك الحالي. لا تحتاج إلى تشغيل العشرة في يوم واحد.</p>
            </div>
            <div className="roles-list">
              {roles.map((role) => (
                <article className="role-card" key={role.number}>
                  <div className="role-card__top"><span className="role-card__number">{role.number}</span><ArrowUpLeft size={17} className="role-card__arrow" /></div>
                  <h3>{role.title}</h3>
                  <p>{role.task}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section section-pad" id="how-it-works">
          <div className="content-width">
            <div className="method-section__heading"><SectionLabel number="03">طريقة الاستخدام</SectionLabel><h2>من المهمة إلى النتيجة<br /><em>في ثلاث حركات.</em></h2></div>
            <div className="steps-grid">
              <article className="step-card"><span className="step-card__number">01</span><div className="step-card__icon"><MousePointer2 size={23} /></div><h3>اختر الموظف</h3><p>حدد المهمة التي تريد إنجازها واختر الدور الذي صُمم لها.</p></article>
              <article className="step-card"><span className="step-card__number">02</span><div className="step-card__icon"><FileText size={23} /></div><h3>أعطه السياق</h3><p>أدخل معلومات مشروعك وأهدافك وقيودك بدل أن تتركه يخمّن.</p></article>
              <article className="step-card"><span className="step-card__number">03</span><div className="step-card__icon"><Target size={23} /></div><h3>راجع المخرج</h3><p>استخدم النتيجة كنقطة بداية، ثم راجعها وعدّلها قبل اعتمادها.</p></article>
            </div>
          </div>
        </section>

        {/* AI Demo Interactive Showcase Section */}
        <section className="ai-demo" id="demo" dir="rtl" aria-labelledby="ai-demo-title">
          <div className="ai-demo__inner">
            <div className="ai-demo__eyebrow">مثال توضيحي من داخل الحزمة</div>
            <h2 id="ai-demo-title">مثال عملي: من اعتراض عميل إلى رد قابل للمراجعة</h2>
            <p className="ai-demo__intro">شاهد كيف تتحول مهمة بسيطة إلى مخرج منظم باستخدام الموظف المناسب.</p>
            <p className="ai-demo__disclaimer">مثال توضيحي من داخل الحزمة؛ لا يمثل نتيجة مضمونة ولا شهادة عميل.</p>

            <div className="ai-demo__grid">
              <article className="ai-demo__card ai-demo__card--situation">
                <span className="ai-demo__step">01</span>
                <div className="ai-demo__label">الموقف</div>
                <p className="ai-demo__quote">العميل يقول: «السعر مرتفع.»</p>
              </article>

              <article className="ai-demo__card ai-demo__card--employee">
                <span className="ai-demo__step">02</span>
                <div className="ai-demo__label">الموظف المناسب</div>
                <h3>موظف خدمة العملاء</h3>
                <p>يستخدم سياق المشروع لصياغة رد يمكن مراجعته قبل الإرسال.</p>
              </article>

              <article className="ai-demo__card ai-demo__card--workflow">
                <span className="ai-demo__step">03</span>
                <div className="ai-demo__label">ماذا يفعل الموظف؟</div>
                <ol>
                  <li>يحدد نوع اعتراض العميل.</li>
                  <li>يميز المعلومات المؤكدة عن الافتراضات.</li>
                  <li>لا يخترع خصمًا أو ضمانًا أو ميزة غير موجودة.</li>
                  <li>يصيغ ردًا مناسبًا للسياق.</li>
                  <li>يقترح خطوة تالية يمكن مراجعتها قبل الإرسال.</li>
                </ol>
              </article>

              <article className="ai-demo__card ai-demo__card--output">
                <span className="ai-demo__step">04</span>
                <div className="ai-demo__label">مثال على الناتج</div>
                <blockquote>أتفهم أن السعر قد يبدو مرتفعًا. حتى أساعدك بشكل أدق: هل المقارنة مع بديل أرخص، أم أن النتيجة المتوقعة غير واضحة بعد؟ بناءً على إجابتك أشرح لك ما يتضمنه العرض والقيمة التي يقدمها، من دون افتراض خصم غير موجود.</blockquote>
              </article>
            </div>

            <div className="ai-demo__review">
              <span className="ai-demo__review-mark" aria-hidden="true">✓</span>
              <p><strong>المراجعة البشرية أولًا:</strong> راجع الناتج وتأكد من توافقه مع معلومات مشروعك قبل استخدامه.</p>
            </div>

            <CheckoutLink className="ai-demo__cta">
              جرّب نفس الطريقة على مهمتك <span aria-hidden="true">←</span>
            </CheckoutLink>
          </div>
        </section>

        <section className="included-section section-pad" id="included">
          <div className="content-width included__grid">
            <div className="included__visual">
              <div className="included__image-frame product-sheet-art" role="img" aria-label="دفتر تشغيل وبطاقات موظفي الذكاء الاصطناعي"><div className="sheet-card sheet-card--back" /><div className="sheet-card sheet-card--mid"><span /><span /><span /><span /></div><div className="sheet-card sheet-card--front"><small>AI EMPLOYEE KIT</small><strong>V2.1</strong><div className="sheet-lines"><i /><i /><i /></div><b className="sheet-check"><Check size={13} /></b></div></div>
              <div className="included__caption"><span>الحزمة الكاملة</span><strong>V2.1</strong></div>
            </div>
            <div className="included__copy">
              <SectionLabel number="04">ماذا تحصل عليه؟</SectionLabel>
              <h2>كل ما تحتاجه<br /><em>لتبدأ بوضوح.</em></h2>
              <p>ليست مجموعة Prompts مبعثرة. إنها مسار تشغيل مختصر يجمع الأدوار، السياق، التحسين، والمراجعة في مكان واحد.</p>
              <ul className="checklist">
                {included.map((item) => <li key={item}><span><Check size={13} strokeWidth={3} /></span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bonuses-section section-pad section-pad--tight">
          <div className="content-width">
            <div className="section-heading section-heading--split bonuses-heading">
              <div><SectionLabel number="05">ومعها أربعة بونصات</SectionLabel><h2>حتى لا تتوقف<br /><em>بعد أول استخدام.</em></h2></div>
              <div className="bonuses-heading__visual bonus-stack-art" role="img" aria-label="بطاقات البونص وخطة الاستخدام"><div className="bonus-paper bonus-paper--back" /><div className="bonus-paper bonus-paper--front"><span>30</span><small>DAY PLAN</small><div className="bonus-lines"><i /><i /><i /><i /></div></div><b className="bonus-clip" /></div>
            </div>
            <div className="bonuses-list">
              {bonuses.map((bonus) => <div className="bonus-row" key={bonus.number}><span className="bonus-row__number">{bonus.number}</span><h3>{bonus.title}</h3><p>{bonus.text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="reviews-section section-pad" id="reviews">
          <div className="content-width reviews__grid">
            <div className="reviews__intro">
              <SectionLabel number="06">آراء العملاء</SectionLabel>
              <h2>التجربة الحقيقية<br /><em>تبدأ بعد الشراء.</em></h2>
              <p>سنضع هنا مراجعات العملاء الموثقة بعد وصول الحزمة إليهم. لا نعرض تقييمات مجهولة أو وعودًا مصطنعة؛ الثقة تُبنى من تجارب حقيقية يمكن نسبها إلى أصحابها.</p>
              <div className="reviews__trust"><CircleCheck size={16} /><span>قسم جاهز لإضافة مراجعات موثقة من مصدرها الحقيقي</span></div>
            </div>
            <div className="reviews__empty">
              <div className="reviews__empty-mark"><BrandMark /></div>
              <div className="reviews__rating"><span className="reviews__stars" aria-label="لم يتم جمع تقييمات بعد">☆ ☆ ☆ ☆ ☆</span><span>لا توجد تقييمات منشورة بعد</span></div>
              <h3>أول تجربة عميل<br />ستظهر هنا.</h3>
              <p>بعد جمع مراجعات حقيقية بإذن أصحابها، سيُستبدل هذا المكان ببطاقات تتضمن الاسم أو الصفة، نص التجربة، ومصدر التقييم.</p>
              <span className="reviews__source">بانتظار أول مراجعة موثقة</span>
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="buy">
          <div className="content-width pricing-card">
            <div className="pricing-card__copy">
              <SectionLabel>العرض المقترح</SectionLabel>
              <h2>ابدأ بموظف واحد<br /><em>ومهمة واحدة اليوم.</em></h2>
              <p>دفع مرة واحدة. وصول إلى الحزمة الكاملة والبونصات. بدون وعود بدخل أو نتائج مضمونة.</p>
              <CheckoutLink className="button button--primary button--large">احصل على الحزمة الآن <ArrowLeft size={18} /></CheckoutLink>
              <span className="pricing-card__note">سيتم تحويلك إلى منصة البيع لإتمام الدفع</span>
            </div>
            <div className="pricing-card__price">
              <div className="price-stamp"><Sparkles size={16} /><span>سعر إطلاق</span></div>
              <div className="price"><span className="price__currency">$</span><strong>19</strong></div>
              <div className="price-old">السعر المعتاد <s>$29</s></div>
              <div className="price-divider" />
              <div className="price-meta"><span>ملفات PDF</span><span>ترخيص استخدام</span><span>تحديث V2.1</span></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="content-width faq__grid">
            <div className="faq__intro"><SectionLabel number="07">قبل أن تبدأ</SectionLabel><h2>أسئلة<br /><em>مهمة.</em></h2><p>إجابات مباشرة حتى تعرف ما الذي تشتريه وما الذي تتوقعه منه.</p></div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={faq.q}>
                  <button className="faq-question" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{faq.q}</span><ChevronDown size={19} /></button>
                  <div className="faq-answer"><p>{faq.a}</p></div>
                </div>;
              })}
            </div>
          </div>
        </section>

        <section className="closing-section section-pad">
          <div className="content-width closing-card">
            <div className="closing-card__mark"><BrandMark /></div>
            <div><SectionLabel>خطوتك التالية</SectionLabel><h2>المشروع لا يحتاج<br /><em>موظفًا خارقًا.</em></h2><p>يحتاج فقط إلى نقطة بداية واضحة.</p></div>
            <CheckoutLink className="button button--light">ابدأ الآن <ArrowLeft size={18} /></CheckoutLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width site-footer__inner">
          <div className="footer-brand"><span className="brand-mark brand-mark--footer"><BrandMark /></span><span>حزمة موظفي الذكاء الاصطناعي</span></div>
          <div className="footer-note">أدوار واضحة. بداية أفضل.</div>
          <div className="footer-copy">© 2026 جميع الحقوق محفوظة</div>
        </div>
      </footer>

      <style>{`
        .ai-demo {
          --demo-ink: #17211f;
          --demo-muted: #5c6965;
          --demo-paper: #f4f1e9;
          --demo-card: #fffdf8;
          --demo-accent: #0f725f;
          --demo-accent-soft: #dfeee8;
          --demo-line: rgba(23, 33, 31, 0.14);
          background: var(--demo-paper);
          color: var(--demo-ink);
          padding: clamp(4rem, 8vw, 7.5rem) 1.25rem;
        }

        .ai-demo__inner {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .ai-demo__eyebrow,
        .ai-demo__label {
          color: var(--demo-accent);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .ai-demo h2 {
          max-width: 780px;
          margin: 0.75rem 0 0;
          font-size: clamp(2rem, 5vw, 4.25rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        .ai-demo__intro {
          max-width: 650px;
          margin: 1rem 0 0;
          color: var(--demo-muted);
          font-size: clamp(1rem, 2vw, 1.25rem);
        }

        .ai-demo__disclaimer {
          display: inline-block;
          margin: 1.5rem 0 0;
          border: 1px solid var(--demo-line);
          border-radius: 999px;
          padding: 0.55rem 0.9rem;
          color: var(--demo-muted);
          font-size: 0.82rem;
        }

        .ai-demo__grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2.75rem;
        }

        .ai-demo__card {
          position: relative;
          min-width: 0;
          border: 1px solid var(--demo-line);
          border-radius: 1.2rem;
          padding: clamp(1.25rem, 3vw, 2rem);
          background: var(--demo-card);
          box-shadow: 0 1rem 2.5rem rgba(23, 33, 31, 0.06);
        }

        .ai-demo__card--situation { grid-column: span 5; }
        .ai-demo__card--employee { grid-column: span 7; }
        .ai-demo__card--workflow { grid-column: span 5; }
        .ai-demo__card--output { grid-column: span 7; }

        .ai-demo__step {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          margin-bottom: 1.5rem;
          border-radius: 50%;
          background: var(--demo-accent-soft);
          color: var(--demo-accent);
          font-size: 0.75rem;
          font-weight: 900;
        }

        .ai-demo__card h3 {
          margin: 0.75rem 0 0.45rem;
          font-size: clamp(1.35rem, 2.5vw, 2rem);
        }

        .ai-demo__card p {
          margin: 0;
          color: var(--demo-muted);
        }

        .ai-demo__quote {
          margin-top: 1.5rem !important;
          color: var(--demo-ink) !important;
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 750;
          line-height: 1.45;
        }

        .ai-demo__card ol {
          display: grid;
          gap: 0.7rem;
          margin: 1rem 0 0;
          padding: 0 1.3rem 0 0;
          color: var(--demo-muted);
        }

        .ai-demo__card li::marker {
          color: var(--demo-accent);
          font-weight: 800;
        }

        .ai-demo__card blockquote {
          margin: 1rem 0 0;
          border-right: 3px solid var(--demo-accent);
          padding: 0.25rem 1rem 0.25rem 0;
          color: var(--demo-ink);
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          line-height: 1.8;
        }

        .ai-demo__review {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          max-width: 780px;
          margin: 1.5rem 0 0;
          color: var(--demo-muted);
        }

        .ai-demo__review-mark {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          background: var(--demo-accent);
          color: #fff;
          font-weight: 900;
        }

        .ai-demo__review p { margin: 0; }

        .ai-demo__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 2rem;
          border-radius: 999px;
          padding: 0.95rem 1.25rem;
          background: var(--demo-ink);
          color: #fff !important;
          font-weight: 800;
          text-decoration: none;
        }

        .ai-demo__cta:hover,
        .ai-demo__cta:focus-visible {
          background: var(--demo-accent);
          color: #fff !important;
        }

        @media (max-width: 700px) {
          .ai-demo { padding: 3.5rem 1rem; }
          .ai-demo__grid { display: grid; grid-template-columns: 1fr; }
          .ai-demo__card--situation,
          .ai-demo__card--employee,
          .ai-demo__card--workflow,
          .ai-demo__card--output { grid-column: auto; }
          .ai-demo__disclaimer { border-radius: 0.8rem; }
          .ai-demo__cta { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}

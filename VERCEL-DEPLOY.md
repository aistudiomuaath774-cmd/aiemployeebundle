# نشر الموقع على Vercel

هذه نسخة مستقلة من موقع «حزمة موظفي الذكاء الاصطناعي» مبنية بواجهة React وVite، ومهيّأة للرفع على Vercel.

## النشر عبر لوحة Vercel

ارفع مجلد المشروع أو ملف ZIP إلى مستودع GitHub، ثم أنشئ مشروعًا جديدًا في Vercel واختر المستودع. استخدم الإعدادات التالية إذا طلبتها المنصة:

| الإعداد | القيمة |
|---|---|
| Framework Preset | Vite |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |

يوجد ملف `vercel.json` داخل المشروع ويحتوي على هذه الإعدادات وإعادة توجيه مسارات الموقع إلى `index.html`.

## النشر عبر Vercel CLI

بعد تثبيت Vercel CLI وتسجيل الدخول، شغّل الأوامر التالية من مجلد المشروع:

```bash
pnpm install
pnpm build
vercel
```

للنشر الإنتاجي استخدم:

```bash
vercel --prod
```

## رابط الدفع

لربط أزرار الشراء بمنصة بيع المنتجات الرقمية، افتح الملف:

```text
client/src/pages/Home.tsx
```

ثم عدّل قيمة:

```ts
const CHECKOUT_URL = "";
```

إلى رابط صفحة الدفع الحقيقي، مثل:

```ts
const CHECKOUT_URL = "https://example.com/checkout";
```

## الأصول المحلية

تم نقل صورة البطل إلى `client/public/assets/ai-kit-hero.webp`، وتم إنشاء `client/public/favicon.png`. لا يحتاج الموقع في هذه النسخة إلى مسارات `manus-storage` أو متغيرات بيئة خاصة بـ Manus.

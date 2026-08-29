# دليل تطوير موقع AirMenu (النسخة الأساسية)

> **AirMenu** — منصة الحلول الرقمية والهوية البصرية (إنجليزية فقط للاعتماد).
> هذا الملف هو المرجع الرسمي لأي تطوير على النسخة الأساسية المعتمدة.

**هوية المشروع:** `AirMenu/` (جذر المشروع الحالي).
**الموقع الأصلي:** شركة سعودية تقدم تطوير الويب، الهوية البصرية، البريد الإلكتروني، والمنتجات الرقمية (i-Menu, i-Card).

---

## 1. نظرة عامة

موقع **ثابت (Static)** كاملٌ بلا خطوة بناء (No build step) — HTML + CSS/SCSS + JS يُفتح مباشرة في المتصفح. لا يحتاج Node.js ولا حزم تثبيت.

| الميزة | القيمة |
|--------|--------|
| اللغة | إنجليزي فقط (`en/`) |
| عدد الصفحات | 14 صفحة (إنجليزية) |
| إطار الواجهة | Bootstrap 5.3 |
| مصدر CSS | SCSS مقسّم (مُجمَّع في `assets/css/styles.css`) |
| المكتبات | jQuery، Owl Carousel، AOS، Iconify |
| الخطوط | Bricolage Grotesque (عبر Google Fonts) |

---

## 2. بنية المشروع

```
AirMenu/
├── en/                        # الصفحات الإنجليزية (اللغة المعتمدة)
│   ├── index.html             # الصفحة الرئيسية
│   ├── about-us.html
│   ├── blog.html / blog-detail.html
│   ├── projects.html / projects-detail.html
│   ├── contact.html
│   ├── support.html / workflow.html
│   ├── sign-in.html / sign-up.html
│   ├── privacy-policy.html / terms-and-conditions.html
│   └── 404.html
├── assets/
│   ├── css/                   # أنماط مُجمَّعة (styles.css…)
│   ├── scss/                  # مصدر SCSS (عدّل هنا ثم أعد التجميع)
│   │   ├── variables/_variables.scss
│   │   ├── layouts/_header.scss
│   │   ├── pages/_index.scss
│   │   ├── component/_reboot.scss
│   │   └── utilities/_override.scss, _icon-size.scss
│   ├── js/custom.js           # جافاسكربت مخصّص
│   ├── images/                # about, backgrounds, logos, portfolio,
│   │                          # pricing, profile, resources, services, svgs, team, testimonial
│   └── libs/                  # مكتبات محلية (bootstrap, jquery, owl.carousel, aos)
├── agents/                    # تعريفات وكالات الذكاء الاصطناعي (.agent.md)
├── prompts/                   # نصوص أوامر توليد الصفحات
├── .gitignore
├── README.md
└── DEV_GUIDE.md               # هذا الملف
```

---

## 3. التشغيل محلياً

لا حاجة لخادم؛ لكن يُفضَّل استخدام خادم محلي بسيط لتجنّب قيود `file://` (مثل تحديد CSS أو مسارات CDN):

**الطريقة الأسرع — فتح مباشر:**
- افتح `en/index.html` بالنقر المزدوج في المتصفح.

**طريقة أفضل — خادم محلي (اختياري):**

<details>
<summary>عبر Python (إذا كان مثبّتاً)</summary>

```bash
cd AirMenu
python -m http.server 8080
# ثم افتح http://localhost:8080/en/index.html
```
</details>

<details>
<summary>عبر VS Code (امتداد Live Server)</summary>

1. افتح مجلد `AirMenu` في VS Code.
2. ثبّت إضافة **Live Server**.
3. انقر بزر الماوس الأيمن على `en/index.html` → **Open with Live Server**.
</details>

> **تيست في المتصفح:** تأكّد أن أقسام الصفحة (Hero, Services, Pricing, Testimonials, FAQ, Contact) تُعرض وتعمل لتحريك السفرول والكاروسيل (Owl/AOS).

---

## 4. تعديل الألوان والتصميم (SCSS)

المتغيّرات كلها في `assets/scss/variables/_variables.scss`. أبرزها:

```scss
$primary: $blue;            // اللون الرئيسي (حالياً #C1FF72)
$secondary: #1f2a2e;        // كحلي غامق
$blue: #C1FF72;             // اللون الأساسي
// الأزرار: $btn-border-radius: 56px (دائري)
```

**عند تعديل SCSS يجب إعادة تجميع `styles.scss` إلى `assets/css/styles.css`.**
طالما لا يوجد `package.json` لهذا المشروع، استخدم **Dart Sass** أو أي أداة compile:

```bash
# مثال باستخدام sass (يُثبَّت مرة واحدة عالمياً: npm i -g sass)
sass assets/scss/styles.scss assets/css/styles.css --style=expanded
```

> إذا لم يتوفر أي مترجم SCSS، يمكنك تعديل `assets/css/styles.css` مباشرة (مُجمَّع)، لكن يُفضَّل التعديل على المصدر في `scss/` للحفاظ على البنية.

---

## 5. إضافة تعديلات على JavaScript

- كل جافاسكربت المخصص في `assets/js/custom.js` (جاري تحت jQuery):
  - تثبيت الهيدر عند السفرول (`fixed-header`).
  - كاروسيل المشاريع المميّزة (Owl Carousel).
  - عدّادات الإحصائيات عبر `IntersectionObserver`.
  - زر العودة للأعلى/الأسفل مع حلقة تقدم.
- اربط أي سكربت جديد في نهاية صفحات HTML قبل `</body>`.

---

## 6. ملاحظات اللغة

- **اللغة المعتمدة: الإنجليزية فقط.** أُزيلت النسخة العربية (`ar/`) نهائياً.
- جميع الصفحات موجودة في `en/` — أي تعديل يُطبَّق على الصفحة الإنجليزية المقابلة مباشرة.
- لا يوجد زر تبديل لغة، ولا روابط إلى نسخة عربية.

---

## 7. النشر

الموقع ثابت بالكامل — يمكن نشره على أي خادم ويب أو CDN:
1. ارفع مجلد `AirMenu` (محتوى `en/` و `assets/`) إلى الخادم.
2. وجّه النطاق إلى `en/index.html`.
3. فعّل قواعد إعادة الكتابة (Rewrite) لملف `.htaccess` إن كان الخادم Apache.
4. تأكّد من صحة `robots.txt` و `sitemap.xml` للسيو.

> **بوليصة أمان:** توجد عناصر سياسة أمان المحتوى (CSP) في `<head>` بصفحة `index.html` — لا تُضعفها أثناء التطوير لأنها جزء من إعداد الإنتاج.

---

## 8. سير عمل الجودة

اتبع **بروتوكول الوكلاء** في `AGENTS.md` للمراحل:
```
Plan (Dragon) → Build (Lion) → Test (Fox) → Security (Turtle) → Deploy (Eagle)
```
قبل أي نشر:
1. اختبار جميع الصفحات الإنجليزية (`en/`).
2. اختبار النماذج (Contact/Sign-in/Sign-up).
3. التحقق من سياسة CSP والأمان.
4. مراجعة الاستجابة (Responsive) على مقاسات الشاشات.

---

## 9. ملاحظات حقوق وملكية

© 2026 **Air Menu** — جميع الحقوق محفوظة.

---

*أُنشئ هذا الدليل آلياً لكي يكون نقطة البداية الرسمية للتطوير على النسخة الأساسية AirMenu.*
*آخر تحديث: 29 أغسطس 2026*

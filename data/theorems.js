/* הגדרות ומשפטים – נלקחו אך ורק מהחומר המצורף.
   src: S = סיכום מוקלד, H = סיכום בכתב יד, N = מחברת הרצאות */
(function () {
  const R = String.raw;
  window.THEOREMS = {

  /* ===================== 1. פולינומים ===================== */
  poly: [
    { type: 'def', title: 'פולינום, מעלה ופולינום מתוקן', src: 'H',
      body: R`$P(x)=a_nx^n+a_{n-1}x^{n-1}+\dots+a_1x+a_0$. המעלה היא החזקה הגבוהה ביותר של $x$ (עם מקדם שונה מ-0); $a_n$ – המקדם המוביל, $a_0$ – המקדם החופשי. אם המקדם המוביל שווה 1 הפולינום נקרא <b>מתוקן</b>.` },
    { type: 'def', title: 'חלוקת פולינומים', src: 'H',
      body: R`אם קיים פולינום $q$ כך ש-$f=g\cdot q$, אומרים ש-$g$ מחלק את $f$ ומסמנים $g\mid f$.` },
    { type: 'formula', title: 'נוסחאות כפל מקוצר (מעלה שלישית)', src: 'S',
      body: R`$$a^3-b^3=(a-b)(a^2+ab+b^2)\qquad a^3+b^3=(a+b)(a^2-ab+b^2)$$` },
    { type: 'thm', title: 'המשפט היסודי של האלגברה', src: 'H',
      body: R`לכל פולינום ממעלה $n$ יש בדיוק $n$ שורשים מעל $\mathbb{C}$ (כולל ריבויים). ניסוח שקול: אם $f=a_nx^n+\dots+a_0$ אז ניתן לכתוב $f=a_n(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_n)$.` },
    { type: 'thm', title: 'נוסחאות וייטה', src: 'SH',
      body: R`יהיו $x_1,\dots,x_n$ שורשי $f=a_nx^n+\dots+a_0$. אז
$$x_1+\dots+x_n=-\frac{a_{n-1}}{a_n},\qquad x_1\cdots x_n=(-1)^n\frac{a_0}{a_n}$$
עבור פולינום מתוקן: סכום השורשים $=-a_{n-1}$ ומכפלתם $=(-1)^na_0$.` },
    { type: 'remark', title: 'מציאת שורשים "במבט"', src: 'SH',
      body: R`<ul><li>אם סכום כל המקדמים שווה 0 אז $x=1$ שורש.</li>
<li>אם סכום המקדמים במקומות הזוגיים שווה לסכום המקדמים במקומות האי-זוגיים אז $x=-1$ שורש.</li>
<li>אם המקדם החופשי $a_0=0$ אז $x=0$ שורש.</li></ul>` },
    { type: 'thm', title: 'משפט השורש הרציונלי', src: 'SH',
      body: R`אם לפולינום עם מקדמים שלמים $a_nx^n+\dots+a_0$ יש שורש רציונלי $\frac pq$ (שבר מצומצם), אז $p\mid a_0$ ו-$q\mid a_n$.` },
    { type: 'thm', title: 'ריבוי שורש ונגזרות', src: 'SH',
      body: R`$\alpha$ הוא שורש מריבוי $m$ של $f$ אם"ם $f(\alpha)=f'(\alpha)=\dots=f^{(m-1)}(\alpha)=0$ ו-$f^{(m)}(\alpha)\neq0$.` },
    { type: 'thm', title: 'משפט השורשים הצמודים', src: 'SHN',
      body: R`בפולינום עם מקדמים ממשיים: אם $z=a+bi$ שורש אז גם $\bar z=a-bi$ שורש. (במחברת: אם $z$ שורש לא ממשי מריבוי $k$ אז גם $\bar z$ שורש מריבוי $k$.)<br>
<b>מסקנה:</b> לפולינום ממשי ממעלה אי-זוגית יש לפחות שורש ממשי אחד.` },
    { type: 'thm', title: 'משפט הפירוק (בזו)', src: 'S',
      body: R`$P(a)=0 \iff P(x)=(x-a)Q(x)$, כאשר מעלת $Q$ קטנה ב-1.` }
  ],

  /* ===================== 2. מספרים מרוכבים ===================== */
  complex: [
    { type: 'def', title: 'מספר מרוכב', src: 'H',
      body: R`$i^2=-1$. מספר מרוכב: $z=a+bi$ עם $a=\operatorname{Re}z,\ b=\operatorname{Im}z$ ממשיים. אם $\operatorname{Re}z=0$ – $z$ <b>מדומה טהור</b>. שני מרוכבים שווים אם"ם החלקים הממשיים והמדומים שווים.` },
    { type: 'def', title: 'צמוד, מודול וארגומנט', src: 'SH',
      body: R`$\bar z=a-bi$,&nbsp; $|z|=\sqrt{a^2+b^2}=\sqrt{z\bar z}$,&nbsp; $\tan\theta=\frac ba$ (תיקון רביע: מוסיפים $180^\circ$ אם $a\lt 0$). הארגומנט מוגדר עד כדי $2\pi k$.` },
    { type: 'prop', title: 'תכונות הצמוד והמודול', src: 'SH',
      body: R`<ul class="cols">
<li>$\overline{z_1\pm z_2}=\bar z_1\pm\bar z_2$, $\ \overline{z_1z_2}=\bar z_1\bar z_2$, $\ \overline{\left(\frac{z_1}{z_2}\right)}=\frac{\bar z_1}{\bar z_2}$</li>
<li>$\overline{z^n}=(\bar z)^n$, $\ \bar{\bar z}=z$</li>
<li>$z\bar z=|z|^2$</li>
<li>$z+\bar z=2\operatorname{Re}(z)$, $\ z-\bar z=2i\operatorname{Im}(z)$</li>
<li>$|z_1z_2|=|z_1||z_2|$, $\ \left|\frac{z_1}{z_2}\right|=\frac{|z_1|}{|z_2|}$, $\ |z^n|=|z|^n$</li>
<li>$|\bar z|=|z|=|-z|$, $\ \operatorname{Re}(z)\le|z|$</li>
<li>אי-שוויון המשולש: $|z_1+z_2|\le|z_1|+|z_2|$, ו-$\big||z_1|-|z_2|\big|\le|z_1-z_2|$</li>
</ul>
החיבור והכפל של מרוכבים קומוטטיביים ואסוציאטיביים, ומתקיים חוק הפילוג.` },
    { type: 'formula', title: 'הופכי וחילוק', src: 'SH',
      body: R`$$z^{-1}=\frac1z=\frac{\bar z}{|z|^2}=\frac{a-bi}{a^2+b^2},\qquad \frac{z_1}{z_2}=\frac{z_1\bar z_2}{|z_2|^2}$$` },
    { type: 'def', title: 'הצגה קוטבית (טריגונומטרית)', src: 'SH',
      body: R`$z=r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta$, כאשר $r=|z|$ ו-$\theta=\arg z$. הצמוד: $\bar z=r\operatorname{cis}(-\theta)$.` },
    { type: 'thm', title: 'כפל, חילוק ודה-מואבר', src: 'SH',
      body: R`$$r_1\operatorname{cis}\theta_1\cdot r_2\operatorname{cis}\theta_2=r_1r_2\operatorname{cis}(\theta_1+\theta_2),\qquad \frac{r_1\operatorname{cis}\theta_1}{r_2\operatorname{cis}\theta_2}=\frac{r_1}{r_2}\operatorname{cis}(\theta_1-\theta_2)$$
$$(r\operatorname{cis}\theta)^n=r^n\operatorname{cis}(n\theta)$$
ולכן $\arg(z_1z_2)=\arg z_1+\arg z_2$, $\ \arg\frac{z_1}{z_2}=\arg z_1-\arg z_2$, $\ \arg\bar z=-\arg z$.` },
    { type: 'thm', title: 'משפט השורשים', src: 'SH',
      body: R`הפתרונות של $w^n=z$ עבור $z=r\operatorname{cis}\theta$:
$$w_k=\sqrt[n]{r}\operatorname{cis}\frac{\theta+2\pi k}{n},\qquad k=0,1,\dots,n-1$$
תכונות: לכולם אותו מודול; מרווח שווה של $\frac{360^\circ}{n}$ ביניהם (מצולע משוכלל); לכל $z\neq0$ יש בדיוק $n$ שורשים שונים.` },
    { type: 'def', title: 'שורשי היחידה', src: 'SN',
      body: R`הפתרונות של $w^n=1$: $\ w_k=\operatorname{cis}\frac{2\pi k}{n}$, $k=0,\dots,n-1$. עבור $n=3$: $\operatorname{cis}0^\circ,\ \operatorname{cis}120^\circ,\ \operatorname{cis}240^\circ$.` },
    { type: 'thm', title: 'סכום ומכפלת שורשים מסדר n', src: 'SH',
      body: R`<ul><li>סכום כל שורשי היחידה מסדר $n\gt 1$ שווה 0: $1+\omega+\dots+\omega^{n-1}=0$.</li>
<li>סכום כל השורשים מסדר $n$ של מספר מרוכב הוא 0.</li>
<li>לפי וייטה עבור $z^n-C=0$: מכפלת השורשים $=(-1)^{n+1}C$.</li></ul>` }
  ],

  /* ===================== 3. מטריצות ===================== */
  matrices: [
    { type: 'def', title: 'מטריצה, שוויון ושחלוף', src: 'SHN',
      body: R`מטריצה $A=[a_{ij}]$ מסדר $m\times n$ מעל שדה $F$; אוסף המטריצות מסומן $F^{m\times n}$. שתי מטריצות שוות אם הן מאותו סדר ו-$a_{ij}=b_{ij}$ לכל $i,j$. <b>המשוחלפת:</b> $(A^t)_{ij}=a_{ji}$ (שורות ↔ עמודות).` },
    { type: 'def', title: 'פעולות', src: 'SN',
      body: R`$A\pm B=[a_{ij}\pm b_{ij}]$ (אותו סדר), $kA=[ka_{ij}]$. <b>כפל:</b> אם $A$ מסדר $m\times n$ ו-$B$ מסדר $n\times p$ אז $AB$ מסדר $m\times p$ ו-
$$(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}$$
חזקה – רק למטריצה ריבועית: $A^k=A\cdots A$ ($k$ פעמים). אם $AB=BA$ אומרים שהמטריצות <b>מתחלפות</b>.` },
    { type: 'prop', title: 'תכונות החיבור, הכפל והשחלוף', src: 'SHN',
      body: R`<ul class="cols">
<li>$A+B=B+A$, $\ (A+B)+C=A+(B+C)$</li>
<li>$(\alpha+\beta)A=\alpha A+\beta A$, $\ \alpha(A+B)=\alpha A+\alpha B$</li>
<li>$(AB)C=A(BC)$, $\ k(AB)=(kA)B=A(kB)$</li>
<li>$A(B\pm C)=AB\pm AC$, $\ (B\pm C)A=BA\pm CA$</li>
<li>$(A^t)^t=A$, $\ (kA)^t=kA^t$, $\ (A\pm B)^t=A^t\pm B^t$</li>
<li>$(AB)^t=B^tA^t$ (הסדר מתהפך)</li>
<li>$A^kA^l=A^{k+l}$, $\ (A^k)^l=A^{kl}$, $\ (A^k)^t=(A^t)^k$</li>
</ul>
<b>מה לא מתקיים:</b> בדרך כלל $AB\neq BA$; אין חוק צמצום; $AB=0$ לא גורר $A=0$ או $B=0$.` },
    { type: 'def', title: 'מטריצות מיוחדות', src: 'SHN',
      body: R`<ul>
<li><b>אפס</b> $O_{m\times n}$; <b>ריבועית</b> ($m=n$); <b>יחידה</b> $I_n$ ($IA=AI=A$).</li>
<li><b>סקלרית</b> $\alpha I$ – סגורה לחיבור, לכפל בסקלר ולכפל, ומתחלפת בכפל עם כל מטריצה מאותו סדר.</li>
<li><b>אלכסונית</b> $\operatorname{diag}(d_1,\dots,d_n)$: $a_{ij}=0$ לכל $i\neq j$.</li>
<li><b>משולשת עליונה</b>: $a_{ij}=0$ לכל $i\gt j$; <b>משולשת תחתונה</b>: $a_{ij}=0$ לכל $i\lt j$.</li>
<li><b>סימטרית</b> $A^t=A$ ($a_{ij}=a_{ji}$); <b>אנטי-סימטרית</b> $A^t=-A$ – ובפרט האלכסון אפסים.</li>
</ul>` },
    { type: 'def', title: 'עקבה', src: 'SNH',
      body: R`$\operatorname{tr}(A)$ = סכום איברי האלכסון הראשי. מתקיים: $\operatorname{tr}(A\pm B)=\operatorname{tr}A\pm\operatorname{tr}B$, $\ \operatorname{tr}(\alpha A)=\alpha\operatorname{tr}A$, $\ \operatorname{tr}(AB)=\operatorname{tr}(BA)$, $\ \operatorname{tr}(A^t)=\operatorname{tr}(A)$.` },
    { type: 'def', title: 'מטריצה מדורגת וקנונית', src: 'SHN',
      body: R`<b>מדורגת:</b> שורות האפסים בתחתית, וכל איבר מוביל נמצא מימין לאיבר המוביל שמעליו. <b>מדורגת קנונית:</b> מדורגת, כל איבר מוביל שווה 1 והוא האיבר היחיד השונה מ-0 בעמודה שלו.` },
    { type: 'remark', title: 'שאלות מפתח – סגירות ותכונות', src: 'SH',
      body: R`<ul>
<li>סימטריות / אנטי-סימטריות / משולשיות / אלכסוניות – כל סוג סגור לחיבור ולחיסור.</li>
<li>סימטרית + אלכסונית = סימטרית.</li>
<li>$A,B$ סימטריות: $AB$ סימטרית <b>אם"ם</b> $AB=BA$.</li>
<li>משולשית עליונה כפול משולשית תחתונה – בדרך כלל לא אלכסונית.</li>
<li>גם סימטרית וגם משולשית ⇒ אלכסונית; גם אנטי-סימטרית וגם משולשית ⇒ אפס.</li>
<li>$A$ סימטרית ⇒ $A^k$ סימטרית; $A$ אנטי-סימטרית ⇒ $A^k$ סימטרית ל-$k$ זוגי ואנטי-סימטרית ל-$k$ אי-זוגי.</li>
<li>הביטוי $AB+CA$ מוגדר רק אם שתי המכפלות מוגדרות ומאותו סדר.</li>
</ul>` },
    { type: 'def', title: 'פולינום של מטריצה', src: 'H',
      body: R`לפולינום $f(x)=a_kx^k+\dots+a_1x+a_0$ ול-$A\in F^{n\times n}$ מגדירים $f(A)=a_kA^k+\dots+a_1A+a_0I$. אם $f(A)=0$ אומרים ש-$A$ מאפסת את $f$ (או: $A$ שורש של $f$).` }
  ],

  /* ===================== 4. מערכות משוואות ===================== */
  systems: [
    { type: 'def', title: 'מערכת משוואות ליניארית (ממ"ל)', src: 'SH',
      body: R`אוסף משוואות $a_{i1}x_1+\dots+a_{in}x_n=b_i$, ובהצגה מטריצית $Ax=b$: $A$ מטריצת המקדמים ($m\times n$), $x$ וקטור הנעלמים, $b$ וקטור המקדמים החופשיים. אם $b=0$ – <b>מערכת הומוגנית</b>. <b>פתרון:</b> וקטור $v\in F^n$ עם $Av=b$. המטריצה המורחבת: $(A|b)$.` },
    { type: 'def', title: 'פעולות שורה אלמנטריות', src: 'SHN',
      body: R`(1) החלפת שורות $R_i\leftrightarrow R_j$; (2) כפל שורה בסקלר $R_i\to\alpha R_i$ ($\alpha\neq0$); (3) הוספת כפולה של שורה לשורה אחרת $R_i\to R_i+\alpha R_j$. לכל פעולה יש פעולה הפוכה מאותו סוג.` },
    { type: 'def', title: 'שקילות שורה', src: 'SHN',
      body: R`$A\sim B$ אם ניתן להגיע מאחת לשנייה ע"י מספר סופי של פעולות שורה אלמנטריות. שקילות שורה היא יחס שקילות (רפלקסיבי, סימטרי, טרנזיטיבי).` },
    { type: 'thm', title: 'קיום ויחידות הצורה הקנונית', src: 'SHN',
      body: R`כל מטריצה שקולת שורה למטריצה מדורגת, ולמטריצה מדורגת קנונית <b>יחידה</b>.` },
    { type: 'thm', title: 'שקילות מערכות', src: 'SHN',
      body: R`אם $(A|b)\sim(C|d)$ אז למערכות $Ax=b$ ו-$Cx=d$ אותו אוסף פתרונות (מערכות שקולות). לכן מותר לדרג.` },
    { type: 'def', title: 'דרגה', src: 'SHN',
      body: R`$r(A)$ = מספר השורות השונות מאפס במטריצה מדורגת השקולה ל-$A$. תמיד $r(A)\le\min(m,n)$.` },
    { type: 'thm', title: 'שלושת המקרים', src: 'SHN',
      body: R`עבור $Ax=b$ עם $n$ נעלמים:
<ol><li>אין פתרון $\iff r(A|b)\gt r(A)$ (שורת סתירה $[0\cdots0|k]$, $k\neq0$).</li>
<li>פתרון יחיד $\iff r(A|b)=r(A)=n$.</li>
<li>אינסוף פתרונות $\iff r(A|b)=r(A)\lt n$.</li></ol>
אין מערכת עם מספר סופי גדול מ-1 של פתרונות. מספר המשתנים החופשיים (דרגות החופש) $=n-r(A)$; משתנה חופשי – עמודה ללא איבר מוביל.` },
    { type: 'thm', title: 'מערכת הומוגנית', src: 'SHN',
      body: R`למערכת הומוגנית יש תמיד פתרון (הטריוויאלי $x=0$). אם $r(A)=n$ – רק הטריוויאלי; אם $r(A)\lt n$ – אינסוף פתרונות. אם יש פתרון לא טריוויאלי (מעל שדה אינסופי) אז יש אינסוף פתרונות.` },
    { type: 'thm', title: 'מבנה הפתרון הכללי', src: 'SHN',
      body: R`אם $y_p$ פתרון פרטי של $Ax=b$, אז כל פתרון הוא $y=y_p+y_h$ כאשר $y_h$ פתרון של ההומוגנית $Ax=0$.
<ul><li>הפרש שני פתרונות של $Ax=b$ הוא פתרון של $Ax=0$.</li><li>אם $u,v$ פתרונות של $Ax=b$ אז $u+v$ פתרון של $Ax=2b$.</li></ul>` },
    { type: 'algo', title: 'אלימינציה של גאוס / גאוס-ז\'ורדן', src: 'SN',
      body: R`(1) מדרגים את $(A|b)$; (2) מזהים משתנים חופשיים (עמודות בלי איבר מוביל); (3) חילוץ לאחור מלמטה למעלה. בגאוס-ז'ורדן מדרגים עד לצורה קנונית והפתרון נקרא ישירות.` },
    { type: 'thm', title: 'קיום פתרון וצירוף ליניארי', src: 'SN',
      body: R`$Ax=b$ פתירה $\iff$ $b$ הוא צירוף ליניארי של עמודות $A$, כלומר $b\in\operatorname{Col}(A)$. הפתרון $x=(\alpha_1,\dots,\alpha_n)$ הוא בדיוק המקדמים: $\alpha_1C_1+\dots+\alpha_nC_n=b$.` }
  ],

  /* ===================== 5. שדות ומרחבים ===================== */
  vs: [
    { type: 'def', title: 'שדה', src: 'HN',
      body: R`קבוצה $F$ עם שתי פעולות (חיבור וכפל) המקיימות: סגירות, קומוטטיביות ואסוציאטיביות לחיבור ולכפל; קיום איבר אפס ($a+0=a$) ואיבר נגדי ($a+(-a)=0$); קיום איבר יחידה ($a\cdot1=a$) והופכי לכל $a\neq0$ ($a\cdot a^{-1}=1$); חוק הפילוג. דוגמאות: $\mathbb{Q},\mathbb{R},\mathbb{C}$. $\mathbb{N}$ אינו שדה (אין נגדי), $\mathbb{Z}$ אינו שדה (אין הופכי).` },
    { type: 'thm', title: 'תכונות בשדה', src: 'HN',
      body: R`איברי היחידה (לחיבור ולכפל) יחידים; הנגדי וההופכי יחידים; $0\cdot a=0$; $-a=(-1)a$; $ab=0\iff a=0$ או $b=0$.` },
    { type: 'def', title: 'מרחב וקטורי', src: 'SHN',
      body: R`קבוצה $V$ מעל שדה $F$ עם חיבור וכפל בסקלר המקיימת 10 אקסיומות: $u+v\in V$; $u+v=v+u$; $(u+v)+w=u+(v+w)$; קיים $0_V$ עם $v+0=v$; לכל $v$ קיים נגדי; $\alpha v\in V$; $(\alpha+\beta)v=\alpha v+\beta v$; $(\alpha\beta)v=\alpha(\beta v)$; $1\cdot v=v$; $\alpha(u+v)=\alpha u+\alpha v$.` },
    { type: 'remark', title: 'מרחבים נפוצים', src: 'SN',
      body: R`$F^n$ (מימד $n$); $F^{m\times n}$ (מימד $mn$); $\mathbb{R}_n[x]$ – פולינומים ממעלה $\le n$ (מימד $n+1$); מרחב הפונקציות $f:\mathbb{R}\to\mathbb{R}$ (לא נוצר סופית).<br>
מרחב מוגדר ביחס לשדה: $\mathbb{C}^2$ הוא מ"ו מעל $\mathbb{R}$, אבל $\mathbb{R}^2$ אינו מ"ו מעל $\mathbb{C}$ (כי $i(1,0)\notin\mathbb{R}^2$). $\dim_{\mathbb{C}}\mathbb{C}^n=n$ ו-$\dim_{\mathbb{R}}\mathbb{C}^n=2n$.` },
    { type: 'thm', title: 'משפטי עזר במרחב וקטורי', src: 'SHN',
      body: R`איבר האפס יחיד; הנגדי יחיד; $0\cdot v=0_V$; $\alpha\cdot0_V=0_V$; $(-1)v=-v$; $\alpha v=0_V\iff\alpha=0$ או $v=0_V$.` },
    { type: 'thm', title: 'הקטנת השדה', src: 'S',
      body: R`אם $V$ מ"ו מעל $K$ ו-$F\subseteq K$ תת-שדה, אז $V$ מ"ו גם מעל $F$ (הכיוון ההפוך לא נכון). למשל $\mathbb{C}$: מעל $\mathbb{C}$ מימד 1 (בסיס $\{1\}$), מעל $\mathbb{R}$ מימד 2 (בסיס $\{1,i\}$).` },
    { type: 'def', title: 'תת-מרחב (תמ"ו)', src: 'SHN',
      body: R`$W\subseteq V$ הוא תת-מרחב אם הוא מרחב וקטורי בעצמו ביחס לאותן פעולות מעל אותו שדה.` },
    { type: 'thm', title: 'קריטריון לתת-מרחב', src: 'SHN',
      body: R`$W\subseteq V$ תמ"ו $\iff$ (1) $W\neq\emptyset$ (בודקים $0\in W$); (2) סגור לחיבור; (3) סגור לכפל בסקלר.<br>
<b>קריטריון חד-שלבי:</b> $W\neq\emptyset$ ולכל $u,v\in W$, $\alpha,\beta\in F$: $\alpha u+\beta v\in W$.` },
    { type: 'thm', title: 'תתי-מרחבים חשובים', src: 'SHN',
      body: R`<ul><li>מרחב הפתרונות של $Ax=0$ הוא תמ"ו של $F^n$; של $Ax=b$ עם $b\neq0$ – <b>לא</b> (0 לא פתרון).</li>
<li>$\{0\}$ ו-$V$ – התת-מרחבים הטריוויאליים.</li>
<li>המטריצות הסימטריות / אנטי-סימטריות / משולשיות / סקלריות / אלכסוניות – תמ"וים של $F^{n\times n}$.</li></ul>` },
    { type: 'thm', title: 'פעולות בין תתי-מרחבים', src: 'SHN',
      body: R`יהיו $U,W$ תמ"וים של $V$.
<ul><li><b>חיתוך</b> $U\cap W$ – תמיד תמ"ו.</li>
<li><b>איחוד</b> $U\cup W$ – תמ"ו $\iff U\subseteq W$ או $W\subseteq U$.</li>
<li><b>הפרש</b> $U\setminus W$ – אף פעם לא תמ"ו (0 נמחק).</li>
<li><b>סכום</b> $U+W=\{u+w\mid u\in U,w\in W\}$ – תמיד תמ"ו, והקטן ביותר המכיל את $U\cup W$.</li></ul>` },
    { type: 'def', title: 'סכום ישר', src: 'SHN',
      body: R`$U+W$ נקרא סכום ישר ($U\oplus W$) אם לכל $v\in U+W$ יש הצגה יחידה $v=u+w$.` },
    { type: 'thm', title: 'אפיון סכום ישר', src: 'SHN',
      body: R`$U+W$ סכום ישר $\iff U\cap W=\{0\}$.` }
  ],

  /* ===================== 6. פרישה ותלות ===================== */
  span: [
    { type: 'def', title: 'צירוף ליניארי', src: 'SHN',
      body: R`$w$ צירוף ליניארי (ק"ל) של $v_1,\dots,v_k$ אם קיימים סקלרים עם $w=\alpha_1v_1+\dots+\alpha_kv_k$.` },
    { type: 'def', title: 'מרחב נפרש וקבוצה פורשת', src: 'SHN',
      body: R`$\operatorname{Sp}(S)=\operatorname{span}\{v_1,\dots,v_k\}=\{\alpha_1v_1+\dots+\alpha_kv_k\mid\alpha_i\in F\}$. $S$ נקראת <b>פורשת</b> של $V$ אם $\operatorname{Sp}(S)=V$. מוסכם $\operatorname{Sp}\{\}=\{0\}$.` },
    { type: 'thm', title: 'תכונות המרחב הנפרש', src: 'SHN',
      body: R`$\operatorname{Sp}(S)$ הוא תמ"ו של $V$, מכיל את $S$, והוא התמ"ו הקטן ביותר המכיל את $S$.<br>
$\operatorname{Sp}(S\cup\{w\})=\operatorname{Sp}(S)\iff w$ ק"ל של איברי $S$.` },
    { type: 'thm', title: 'שוויון מרחבים נפרשים', src: 'S',
      body: R`$\operatorname{Sp}(S_1)=\operatorname{Sp}(S_2)\iff$ כל וקטור ב-$S_1$ הוא ק"ל של $S_2$ וכל וקטור ב-$S_2$ הוא ק"ל של $S_1$ (הכלה דו-כיוונית).` },
    { type: 'def', title: 'מרחב נוצר סופית', src: 'SN',
      body: R`$V$ נוצר סופית אם יש לו קבוצה פורשת סופית. $\mathbb{R}_3[x]$ נוצר סופית ע"י $\{1,x,x^2,x^3\}$; $\mathbb{R}[x]$ (כל הפולינומים) לא נוצר סופית.` },
    { type: 'def', title: 'מרחב שורות ומרחב עמודות', src: 'SHN',
      body: R`$\operatorname{Row}(A)$ – נפרש ע"י שורות $A$ (תמ"ו של $F^n$); $\operatorname{Col}(A)$ – נפרש ע"י העמודות (תמ"ו של $F^m$). $\operatorname{Col}(A)=\operatorname{Row}(A^t)$.` },
    { type: 'thm', title: 'שקילות שורה ומרחב השורות', src: 'SHN',
      body: R`מטריצות שקולות שורה – בעלות אותו מרחב שורות. עבור מטריצות מאותו סדר $m\times n$: שקולות שורה $\iff$ אותו מרחב שורות. (פעולות שורה <b>כן</b> משנות את מרחב העמודות!)` },
    { type: 'def', title: 'תלות ליניארית', src: 'SHN',
      body: R`$\{v_1,\dots,v_k\}$ <b>תלויה ליניארית</b> (ת"ל) אם קיימים סקלרים לא כולם 0 עם $\alpha_1v_1+\dots+\alpha_kv_k=0$. אחרת – <b>בלתי תלויה</b> (בת"ל): הצירוף מתאפס רק עבור הפתרון הטריוויאלי.` },
    { type: 'thm', title: 'משפטי תלות ופרישה (1–11)', src: 'SHN',
      body: R`<ol>
<li>$\{v_1,\dots,v_k\}$ ($k\ge2$) ת"ל $\iff$ קיים וקטור שהוא ק"ל של האחרים.</li>
<li>אם $v_1,\dots,v_k\neq0$: ת"ל $\iff$ קיים $v_i$ שהוא ק"ל של <b>קודמיו</b> $v_1,\dots,v_{i-1}$.</li>
<li>אם $v_1,\dots,v_k\neq0$: ת"ל $\iff$ קיים וקטור שהוא ק"ל של שאר איברי הקבוצה.</li>
<li>$\{v\}$ ת"ל $\iff v=0$.</li>
<li>$\{u,v\}$ עם $u,v\neq0$ ת"ל $\iff u=\alpha v$ (פרופורציונליים).</li>
<li>כל קבוצה המכילה את וקטור האפס – ת"ל.</li>
<li>כל קבוצה המכילה תת-קבוצה ת"ל – ת"ל.</li>
<li>כל תת-קבוצה לא ריקה של קבוצה בת"ל – בת"ל.</li>
<li>$w\in\operatorname{Sp}\{v_1,\dots,v_k\}$: ההצגה של $w$ כק"ל יחידה $\iff\{v_1,\dots,v_k\}$ בת"ל.</li>
<li>שורה $j$ ב-$A$ מתאפסת ע"י פעולות שורה אלמנטריות $\iff$ היא ק"ל של השורות האחרות.</li>
<li>השורות השונות מאפס במטריצה מדורגת – בת"ל.</li>
</ol>
<b>מסקנה:</b> השורות השונות מאפס במטריצה מדורגת שקולה הן גם פורשות את מרחב השורות וגם בת"ל.` },
    { type: 'algo', title: 'בדיקת תלות – שתי דרכים', src: 'SN',
      body: R`(1) לפי הגדרה: רושמים $\sum\alpha_iv_i=0$ ופותרים ממ"ל הומוגנית: פתרון יחיד ⇒ בת"ל, אינסוף ⇒ ת"ל.<br>
(2) "שמים" את הוקטורים כשורות במטריצה ומדרגים: התאפסה שורה ⇒ ת"ל; לא התאפסה ⇒ בת"ל.<br>
<b>הערה:</b> פולינומים ממעלות שונות זה מזה (ושונים מ-0) – בת"ל.` },
    { type: 'algo', title: 'בדיקה אם w ∈ Sp(S) / אם S פורשת', src: 'S',
      body: R`בונים מטריצה שעמודותיה וקטורי $S$ ועמודה אחרונה $w$, ומדרגים. יש פתרון ⇒ $w\in\operatorname{Sp}(S)$; שורת סתירה ⇒ לא. לבדיקת פרישה של כל $V$ שמים וקטור כללי $(x,y,z,\dots)$ – $S$ פורשת אם"ם אין שורת אפסים במקדמים שעלולה ליצור סתירה.` },
    { type: 'thm', title: 'משפט הצמצום', src: 'SN',
      body: R`מכל קבוצה פורשת ניתן לצמצם בסיס ע"י הסרת וקטורים שהם ק"ל של קודמיהם. סד"פ: שמים את הוקטורים כ<b>עמודות</b>, מדרגים, והוקטורים <b>המקוריים</b> שבעמודות עם איבר מוביל הם הבסיס.` },
    { type: 'thm', title: 'משפט ההחלפה', src: 'SHN',
      body: R`יהי $V$ נוצר סופית, $B=\{u_1,\dots,u_n\}$ פורשת ו-$S=\{w_1,\dots,w_m\}$ בת"ל. אז $n\ge m$: מספר האיברים בכל קבוצה פורשת גדול או שווה למספר האיברים בכל קבוצה בת"ל.` }
  ],

  /* ===================== 7. בסיס, ממד ודרגה ===================== */
  basis: [
    { type: 'def', title: 'בסיס וממד', src: 'SHN',
      body: R`$B=\{v_1,\dots,v_n\}$ <b>בסיס</b> של $V$ אם הוא בת"ל ופורש את $V$. <b>הממד</b> $\dim_FV$ = מספר האיברים בבסיס (מוגדר היטב – לכל הבסיסים אותו גודל, ממשפט ההחלפה). בסיס הוא קבוצה <b>סדורה</b>. למרחב האפס יש קבוצה פורשת $\{0\}$ אך אין בסיס (מוסכם: ממד 0).` },
    { type: 'def', title: 'בסיסים סטנדרטיים', src: 'SHN',
      body: R`$F^n$: $\{e_1,\dots,e_n\}$, ממד $n$. $F^{m\times n}$: $\{E_{ij}\}$ (1 במקום אחד), ממד $mn$. $\mathbb{R}_n[x]$: $\{1,x,\dots,x^n\}$, ממד $n+1$.` },
    { type: 'thm', title: 'הגדרות שקולות לבסיס', src: 'SHN',
      body: R`עבור $B=\{v_1,\dots,v_n\}\subseteq V$ התנאים שקולים:
<ol><li>$B$ בסיס (בת"ל ופורשת).</li><li>$B$ קבוצה פורשת מינימלית.</li><li>$B$ קבוצה בת"ל מקסימלית.</li><li>$\dim V=n$ ו-$B$ בת"ל.</li><li>$\dim V=n$ ו-$B$ פורשת.</li></ol>` },
    { type: 'thm', title: 'משפטי בסיס וממד (dim V = n)', src: 'SHN',
      body: R`<ol>
<li>כל קבוצה עם יותר מ-$n$ וקטורים – ת"ל.</li>
<li>כל קבוצה עם פחות מ-$n$ וקטורים – לא פורשת.</li>
<li>כל קבוצה בת"ל בת $n$ וקטורים – בסיס ("השלישי חינם").</li>
<li>כל קבוצה פורשת בת $n$ וקטורים – בסיס.</li>
<li>כל קבוצה בת"ל ניתנת להשלמה לבסיס (משפט ההשלמה).</li>
<li>כל קבוצה פורשת מכילה בסיס (משפט הצמצום).</li>
<li>אם $W$ תמ"ו של $V$ אז $\dim W\le\dim V$, ואם $\dim W=\dim V$ אז $W=V$.</li>
</ol>
<b>דגש:</b> שוויון ממדים לבדו לא מוכיח שוויון מרחבים – חייבים הכלה.` },
    { type: 'thm', title: 'משפט המימדים הראשון', src: 'SHN',
      body: R`עבור תמ"וים $U,W$ ממימד סופי:
$$\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$$
<b>משפט עזר:</b> אם $B_U,B_W$ בסיסים של $U,W$ אז $B_U\cup B_W$ פורשת את $U+W$. בפרט, אם $U\cap W=\{0\}$: $\dim(U\oplus W)=\dim U+\dim W$.` },
    { type: 'thm', title: 'משפטי הדרגה', src: 'SHN',
      body: R`<ol><li>$\dim\operatorname{Row}(A)=r(A)$.</li><li>$r(A)=r(A^t)$.</li><li>$\dim\operatorname{Row}(A)=\dim\operatorname{Col}(A)$ (מספר השורות הבת"ל = מספר העמודות הבת"ל).</li>
<li>$r(AB)\le\min\{r(A),r(B)\}$; בפרט $r(A^2)\le r(A)$.</li>
<li>ממד מרחב הפתרונות של $Ax=0$ (מרחב האפס $N(A)$): $\dim N(A)=n-r(A)$.</li></ol>
מהסיכום בכתב יד: אם $AB=0$ (ריבועיות מסדר $n$) אז $r(A)+r(B)\le n$.` },
    { type: 'def', title: 'וקטור קואורדינטות', src: 'SHN',
      body: R`יהי $B=\{v_1,\dots,v_n\}$ בסיס סדור של $V$. לכל $w\in V$ קיימים סקלרים <b>יחידים</b> עם $w=\alpha_1v_1+\dots+\alpha_nv_n$, ו-$[w]_B=(\alpha_1,\dots,\alpha_n)^t\in F^n$. (קיום – כי $B$ פורשת; יחידות – כי $B$ בת"ל.)` },
    { type: 'thm', title: 'קואורדינטות ותלות', src: 'SHN',
      body: R`$u_1,\dots,u_k\in V$ בת"ל $\iff[u_1]_B,\dots,[u_k]_B$ בת"ל ב-$F^n$. כך בודקים תלות של מטריצות/פולינומים: הופכים לוקטורי עמודה ומדרגים.` }
  ],

  /* ===================== 8. מטריצות הפיכות ===================== */
  inverse: [
    { type: 'def', title: 'מטריצה הפיכה', src: 'SHN',
      body: R`$A\in F^{n\times n}$ הפיכה אם קיימת $B$ עם $AB=BA=I$. ההופכית יחידה ומסומנת $A^{-1}$. למטריצה לא ריבועית אין הופכית משני הצדדים.` },
    { type: 'thm', title: 'יחידות והפיכות מצד אחד', src: 'SHN',
      body: R`אם $AB=I$ ו-$CA=I$ אז $B=C$.<br>
עבור $A,B$ <b>ריבועיות</b>: אם $AB=I$ אז $A$ הפיכה ו-$B=A^{-1}$ (בפרט $BA=I$). במטריצות מלבניות זה לא נכון: $A=(1\ 0)$, $B=\binom10$ – $AB=(1)$ אבל $BA=\begin{pmatrix}1&0\\0&0\end{pmatrix}\neq I_2$.` },
    { type: 'thm', title: 'תכונות הופכיות', src: 'SHN',
      body: R`<ul><li>$(A^{-1})^{-1}=A$</li><li>$(AB)^{-1}=B^{-1}A^{-1}$ ("גרביים ונעליים"); $(A_1\cdots A_k)^{-1}=A_k^{-1}\cdots A_1^{-1}$</li><li>$(A^t)^{-1}=(A^{-1})^t$</li><li>$(A^m)^{-1}=(A^{-1})^m$</li>
<li>מכפלת הפיכות – הפיכה; <b>סכום</b> הפיכות – לא בהכרח הפיך.</li>
<li>$A,C$ ריבועיות: $AC$ הפיכה $\iff$ $A$ ו-$C$ הפיכות.</li>
<li>$A$ הפיכה ⇒ $r(AB)=r(BA)=r(B)$ (ההפך לא נכון).</li></ul>` },
    { type: 'def', title: 'מטריצה אלמנטרית', src: 'SHN',
      body: R`מטריצה $E$ המתקבלת מ-$I$ ע"י פעולת שורה אלמנטרית אחת.` },
    { type: 'thm', title: 'כפל במטריצה אלמנטרית', src: 'SHN',
      body: R`ביצוע פעולת שורה $\varphi$ על $A$ זהה לכפל משמאל $EA$, כאשר $E$ מתקבלת מ-$I$ ע"י אותה פעולה (ובעמודות – כפל מימין $AE$).<br>
כל מטריצה אלמנטרית הפיכה, וההופכית שלה אלמנטרית מאותו סוג: $R_i\leftrightarrow R_j$ ↔ עצמה; $R_i\to\alpha R_i$ ↔ $R_i\to\alpha^{-1}R_i$; $R_i\to R_i+\alpha R_j$ ↔ $R_i\to R_i-\alpha R_j$.<br>
אם $A\sim B$ אז קיימות אלמנטריות עם $E_k\cdots E_1A=B$.` },
    { type: 'thm', title: 'קריטריון הדרגה', src: 'SHN',
      body: R`$A\in F^{n\times n}$ הפיכה $\iff r(A)=n$ $\iff$ $A\sim I$ $\iff$ $A$ מכפלה של מטריצות אלמנטריות.` },
    { type: 'algo', title: 'חישוב הופכית', src: 'SHN',
      body: R`מדרגים $(A\,|\,I)\to\dots\to(I\,|\,A^{-1})$. אם לא מגיעים ל-$I$ (מתאפסת שורה) – $A$ לא הפיכה. שימוש: אם $A$ הפיכה, הפתרון היחיד של $Ax=b$ הוא $x=A^{-1}b$.` },
    { type: 'thm', title: 'משפט התנאים השקולים להפיכות', src: 'SHN',
      body: R`עבור $A\in F^{n\times n}$ התנאים הבאים שקולים:
<ol class="cols2">
<li>$A$ הפיכה</li><li>קיימת $B$ עם $AB=I$</li><li>קיימת $C$ עם $CA=I$</li>
<li>$A\sim I_n$</li><li>$A$ מכפלה של אלמנטריות</li><li>$r(A)=n$</li>
<li>ל-$Ax=0$ רק הפתרון הטריוויאלי</li><li>$\dim N(A)=0$</li>
<li>ל-$Ax=b$ פתרון יחיד לכל $b$</li><li>$Ax=b$ פתירה לכל $b$</li>
<li>עמודות $A$ בת"ל</li><li>עמודות $A$ פורשות את $F^n$</li><li>עמודות $A$ בסיס ל-$F^n$</li>
<li>שורות $A$ בת"ל</li><li>שורות $A$ פורשות את $F^n$</li><li>שורות $A$ בסיס ל-$F^n$</li>
<li>$L_A(x)=Ax$ חח"ע</li><li>$L_A(x)=Ax$ על $F^n$</li>
<li>$\det(A)\neq0$</li><li>0 אינו ערך עצמי של $A$</li><li>$A^t$ הפיכה</li>
</ol>` }
  ],

  /* ===================== 9. דטרמיננטות ===================== */
  det: [
    { type: 'def', title: 'דטרמיננטה', src: 'SHN',
      body: R`פונקציה $\det:F^{n\times n}\to F$ (סימון $|A|$). $n=1$: $\det(a)=a$. $n=2$: $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$.` },
    { type: 'def', title: 'מינור ופיתוח לפי שורה', src: 'SHN',
      body: R`המינור $M_{ij}$ – הדטרמיננטה של המטריצה המתקבלת מ-$A$ ע"י מחיקת שורה $i$ ועמודה $j$. פיתוח לפי השורה הראשונה:
$$|A|=\sum_{k=1}^n(-1)^{1+k}a_{1k}M_{1k}$$
הסימן $(-1)^{i+j}$ – "לוח שחמט" שמתחיל בפלוס.` },
    { type: 'thm', title: 'שחלוף ופיתוח לפי כל שורה/עמודה', src: 'SHN',
      body: R`$|A^t|=|A|$ – כל מה שנכון לשורות נכון גם לעמודות. ניתן לפתח לפי כל שורה או עמודה; כדאי לבחור את זו עם הכי הרבה אפסים.` },
    { type: 'thm', title: 'מטריצה משולשית', src: 'SHN',
      body: R`אם $A$ משולשית (עליונה/תחתונה/אלכסונית) אז $|A|=\prod_{i=1}^na_{ii}$ – מכפלת איברי האלכסון.` },
    { type: 'thm', title: 'השפעת פעולות שורה/עמודה', src: 'SHN',
      body: R`<ol><li>החלפת שתי שורות (עמודות): $|B|=-|A|$.</li><li>כפל שורה ב-$\alpha\neq0$: $|B|=\alpha|A|$.</li><li>הוספת כפולה של שורה לשורה אחרת: $|B|=|A|$.</li></ol>` },
    { type: 'thm', title: 'דטרמיננטה והפיכות', src: 'SHN',
      body: R`$A$ הפיכה $\iff|A|\neq0$.` },
    { type: 'thm', title: 'תכונות הדטרמיננטה', src: 'SHN',
      body: R`<ul><li>$|\alpha A|=\alpha^n|A|$</li><li>$|AB|=|A||B|$ (ולכן $|AB|=|BA|$)</li><li>$|A^{-1}|=\frac1{|A|}$</li><li>$|A^k|=|A|^k$</li><li>$|A^t|=|A|$</li></ul>
<b>מלכודת:</b> $|A+B|\neq|A|+|B|$ באופן כללי (למשל $A=I$, $B=-I$ מסדר 2).` },
    { type: 'thm', title: 'ליניאריות בשורה', src: 'SHN',
      body: R`הדטרמיננטה ליניארית בכל שורה בנפרד (כששאר השורות זהות):
$$\begin{vmatrix}a+u&b+v&c+w\\x&y&z\\\alpha&\beta&\gamma\end{vmatrix}=\begin{vmatrix}a&b&c\\x&y&z\\\alpha&\beta&\gamma\end{vmatrix}+\begin{vmatrix}u&v&w\\x&y&z\\\alpha&\beta&\gamma\end{vmatrix}$$` },
    { type: 'formula', title: 'הופכית 2×2', src: 'SN',
      body: R`אם $|A|=ad-bc\neq0$: $$\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$` },
    { type: 'thm', title: 'כלל קרמר', src: 'SHN',
      body: R`אם $|A|\neq0$ אז ל-$Ax=b$ פתרון יחיד: $x_j=\dfrac{|A_j|}{|A|}$, כאשר $A_j$ מתקבלת מ-$A$ ע"י החלפת העמודה ה-$j$ בוקטור $b$.` },
    { type: 'thm', title: 'דטרמיננטת ונדרמונדה', src: 'SN',
      body: R`עבור מטריצה שכל שורה בה היא $1,x_i,x_i^2,\dots,x_i^{n-1}$:
$$\det V=\prod_{1\le i\lt j\le n}(x_j-x_i)$$
והמטריצה הפיכה אם"ם כל ה-$x_i$ שונים זה מזה.` },
    { type: 'remark', title: 'טריק סכום שורות קבוע', src: 'S',
      body: R`אם סכום האיברים בכל שורה הוא $S$, מחברים את כל העמודות לעמודה הראשונה ($C_1\to C_1+C_2+\dots$), מוציאים $S$ החוצה ונשארת עמודת אחדות.` }
  ],

  /* ===================== 10. העתקות ליניאריות ===================== */
  lt: [
    { type: 'def', title: 'העתקה ליניארית', src: 'SHN',
      body: R`$T:V\to U$ (מרחבים מעל $F$) ליניארית אם לכל $u,v\in V$, $\alpha\in F$: $T(u+v)=T(u)+T(v)$ ו-$T(\alpha v)=\alpha T(v)$. בשקילות: $T(\alpha u+\beta v)=\alpha T(u)+\beta T(v)$. העתקה $T:V\to V$ נקראת <b>אופרטור ליניארי</b>. דוגמאות: העתקת האפס, אופרטור הזהות $I(v)=v$, הגזירה $T(p)=p'$.` },
    { type: 'thm', title: 'תכונות יסוד', src: 'SHN',
      body: R`$T(0_V)=0_U$ ו-$T(-v)=-T(v)$. תנאי הכרחי (לא מספיק): אם $T(0)\neq0$ – $T$ לא ליניארית (למשל $T(x)=7x-5$).` },
    { type: 'def', title: 'גרעין ותמונה', src: 'SHN',
      body: R`$\ker T=\{v\in V\mid T(v)=0_U\}$ – תמ"ו של $V$. $\ \operatorname{Im}T=\{u\in U\mid\exists v\in V,\ T(v)=u\}$ – תמ"ו של $U$ (ולכן $\dim\operatorname{Im}T\le\dim U$).` },
    { type: 'thm', title: 'חח"ע ועל', src: 'SHN',
      body: R`<b>חח"ע:</b> $T(v_1)=T(v_2)\Rightarrow v_1=v_2$. מתקיים: $T$ חח"ע $\iff\ker T=\{0\}\iff\dim\ker T=0$. $T$ חח"ע $\iff$ שולחת כל קבוצה בת"ל לקבוצה בת"ל.<br>
<b>על:</b> $\operatorname{Im}T=U$. מתקיים: $T$ על $\iff\dim\operatorname{Im}T=\dim U$.` },
    { type: 'thm', title: 'קבוצה פורשת לתמונה', src: 'SHN',
      body: R`אם $B=\{v_1,\dots,v_n\}$ בסיס של $V$ אז $\operatorname{Im}T=\operatorname{span}\{T(v_1),\dots,T(v_n)\}$. סד"פ: מפעילים $T$ על בסיס המקור, מדרגים, והשורות שלא התאפסו – בסיס לתמונה.` },
    { type: 'thm', title: 'משפט הממד (המימדים השני)', src: 'SHN',
      body: R`לכל $T:V\to U$ עם $V$ ממימד סופי: $$\dim V=\dim\ker T+\dim\operatorname{Im}T$$
<b>מסקנות</b> ($\dim V=n$, $\dim U=m$): $\dim\operatorname{Im}T\le\min(n,m)$; אם $n\lt m$ – $T$ לא על; אם $n\gt m$ – $T$ לא חח"ע; אם $n=m$: $T$ חח"ע $\iff T$ על ("השלישי חינם").` },
    { type: 'thm', title: 'משפט הקיום והיחידות', src: 'SHN',
      body: R`יהי $B=\{v_1,\dots,v_n\}$ בסיס של $V$ ו-$u_1,\dots,u_n\in U$ <b>כלשהם</b>. אז קיימת העתקה ליניארית <b>יחידה</b> $T:V\to U$ עם $T(v_i)=u_i$. העתקה ליניארית נקבעת ביחידות ע"י ערכיה על בסיס. (אם הקבוצה במקור אינה בסיס – ייתכן שאין העתקה כזו או שאינה יחידה.)` },
    { type: 'def', title: 'פעולות בין העתקות', src: 'SHN',
      body: R`$(T\pm S)(v)=T(v)\pm S(v)$, $\ (\alpha T)(v)=\alpha T(v)$, הרכבה $(S\circ T)(v)=S(T(v))$ (קודם $T$). בדרך כלל $ST\neq TS$. לאופרטור: $T^k=T\circ\dots\circ T$. סכום, כפל בסקלר והרכבה של ליניאריות – ליניאריות.` },
    { type: 'def', title: 'העתקה הפיכה ואיזומורפיזם', src: 'SHN',
      body: R`$T:V\to U$ הפיכה אם קיימת $S:U\to V$ עם $S\circ T=I_V$ ו-$T\circ S=I_U$; אז $S=T^{-1}$ יחידה וליניארית. $T$ הפיכה $\iff$ חח"ע ועל. העתקה הפיכה נקראת <b>איזומורפיזם</b>, והמרחבים <b>איזומורפיים</b>.` },
    { type: 'thm', title: 'איזומורפיזם וממדים', src: 'SHN',
      body: R`$V,U$ איזומורפיים $\iff\dim V=\dim U$. אם $T$ הפיכה אז $\dim V=\dim U$ (ההפך לא: ממד שווה לא גורר ש-$T$ <i>הנתונה</i> הפיכה). $T$ הפיכה $\iff$ מעבירה בסיס של $V$ לבסיס של $U$.<br>
דוגמאות: $\mathbb{R}_1[x]\cong\mathbb{R}^2$ ע"י $T(a+bx)=(a,b)$; $\mathbb{R}_3[x]\cong\mathbb{R}^{2\times2}$; $T(v)=[v]_B$ הוא איזומורפיזם $V\to F^n$.` },
    { type: 'thm', title: 'העתקת כפל במטריצה', src: 'SHN',
      body: R`לכל $A\in F^{m\times n}$, $T(v)=Av$ היא העתקה ליניארית $F^n\to F^m$, ו:
<ol><li>$\operatorname{Im}T=\operatorname{Col}(A)$</li><li>$\dim\operatorname{Im}T=r(A)$</li><li>$\ker T$ = מרחב הפתרונות של $Ax=0$</li><li>$\dim\ker T=n-r(A)$ = מספר המשתנים החופשיים</li></ol>
<b>טעות נפוצה:</b> בסיס לתמונה – העמודות של $A$ <b>המקורית</b> במיקומי האיברים המובילים, לא עמודות המטריצה המדורגת.` }
  ],

  /* ===================== 11. מטריצה מייצגת ודמיון ===================== */
  repr: [
    { type: 'def', title: 'מטריצה מייצגת', src: 'SHN',
      body: R`יהי $T:V\to V$ ליניארי ו-$B=\{v_1,\dots,v_n\}$ בסיס. אם $T(v_j)=a_{1j}v_1+\dots+a_{nj}v_n$ אז
$$[T]_B=\Big([T(v_1)]_B\ \cdots\ [T(v_n)]_B\Big)$$
העמודה ה-$j$ היא וקטור הקואורדינטות של $T(v_j)$. (להעתקה בין מרחבים שונים: $[T]^E_B$ – קואורדינטות לפי בסיס הטווח.)` },
    { type: 'thm', title: 'הנוסחה המרכזית', src: 'SHN',
      body: R`$$[T]_B\cdot[v]_B=[T(v)]_B$$
מכאן: $v\in\ker T\iff[T]_B[v]_B=0$ (הגרעין לפי $B$ = פתרונות הממ"ל ההומוגנית), $\dim\operatorname{Im}T=r([T]_B)$, ווקטורי הקואורדינטות של התמונה = $\operatorname{Col}([T]_B)$.` },
    { type: 'algo', title: 'סד"פ לבניית מטריצה מייצגת', src: 'SN',
      body: R`(1) מפעילים $T$ על כל איבר בבסיס; (2) מציגים כל תוצאה כצירוף של איברי הבסיס; (3) שמים את המקדמים כ<b>עמודות</b>. בבסיס סטנדרטי: המקדמים של הרכיב הראשון יוצאים בשורה הראשונה וכן הלאה.` },
    { type: 'thm', title: 'תכונות המטריצה המייצגת', src: 'SHN',
      body: R`<ul><li>$[T\pm S]_B=[T]_B\pm[S]_B$</li><li>$[\alpha T]_B=\alpha[T]_B$</li><li>$[T\circ S]_B=[T]_B[S]_B$</li><li>$[T^k]_B=([T]_B)^k$</li><li>$T$ הפיך $\iff[T]_B$ הפיכה, ואז $[T^{-1}]_B=([T]_B)^{-1}$</li></ul>` },
    { type: 'def', title: 'מטריצת מעבר בין בסיסים', src: 'SHN',
      body: R`יהיו $B$ (ישן) ו-$S=\{u_1,\dots,u_n\}$ (חדש). מטריצת המעבר $P_{B\to S}$ – עמודותיה הן $[u_1]_B,\dots,[u_n]_B$ (איברי הבסיס החדש לפי הישן). היא הפיכה, ו-$Q_{S\to B}=P^{-1}$.` },
    { type: 'thm', title: 'משפט מטריצת המעבר', src: 'SHN',
      body: R`$$P_{B\to S}[v]_S=[v]_B,\qquad [T]_S=P^{-1}[T]_BP$$
(טיפ: כשעוברים מבסיס סטנדרטי $E$ לבסיס $B$, $P$ היא פשוט איברי $B$ כעמודות.)` },
    { type: 'def', title: 'מטריצות דומות', src: 'SHN',
      body: R`$B$ <b>דומה</b> ל-$A$ אם קיימת $P$ הפיכה עם $B=P^{-1}AP$. דמיון הוא יחס שקילות (רפלקסיבי, סימטרי, טרנזיטיבי).` },
    { type: 'thm', title: 'דמיון וייצוג', src: 'SHN',
      body: R`$A,B$ דומות $\iff$ הן מייצגות את אותו אופרטור $T:V\to V$ לפי בסיסים (אולי) שונים.` },
    { type: 'thm', title: 'שמורות דמיון', src: 'SHN',
      body: R`אם $A$ ו-$B$ דומות אז: $|A|=|B|$, $r(A)=r(B)$, $\operatorname{tr}(A)=\operatorname{tr}(B)$, אותו פולינום אופייני, ואותם ע"ע עם אותם ריבויים (אלגברי וגיאומטרי). אם $A\approx B$ אז $A^k\approx B^k$.<br>
<b>זהירות:</b> קיום השמורות הוא תנאי הכרחי בלבד – לא מספיק לדמיון.` }
  ],

  /* ===================== 12. ערכים עצמיים ולכסון ===================== */
  eigen: [
    { type: 'def', title: 'ערך עצמי ווקטור עצמי', src: 'SHN',
      body: R`$\lambda\in F$ ע"ע של $T:V\to V$ אם קיים $v\neq0$ עם $T(v)=\lambda v$; $v$ – ו"ע המתאים ל-$\lambda$. למטריצה: $Av=\lambda v$, $v\neq0$. וקטור האפס לעולם אינו ו"ע, אבל $\lambda=0$ יכול להיות ע"ע: $0$ ע"ע $\iff$ $T$ לא חח"ע / $A$ לא הפיכה, ואז הו"ע של 0 הם $\ker T\setminus\{0\}$.` },
    { type: 'def', title: 'מרחב עצמי', src: 'SHN',
      body: R`$V_\lambda=\{v\in V\mid T(v)=\lambda v\}$ (כל הו"ע של $\lambda$ ווקטור האפס) – תמ"ו של $V$. למטריצה: $V_\lambda$ = מרחב הפתרונות של $(\lambda I-A)x=0$.` },
    { type: 'def', title: 'פולינום אופייני', src: 'SHN',
      body: R`$f_A(\lambda)=|\lambda I-A|$. $\lambda$ ע"ע של $A$ $\iff f_A(\lambda)=0$. לאופרטור: הפ"א של $[T]_B$ (לא תלוי בבסיס).<br>
תכונות: ממעלה $n$ ומתוקן; $\sum\lambda_i=\operatorname{tr}(A)$; $\prod\lambda_i=(-1)^na_0=|A|$; למטריצה $n\times n$ בדיוק $n$ ע"ע (כולל ריבויים, מעל $\mathbb{C}$). עבור $2\times2$: $\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0$.` },
    { type: 'def', title: 'ריבוי אלגברי וגיאומטרי', src: 'SHN',
      body: R`<b>ר"א</b> – החזקה של $(\lambda-\lambda_i)$ בפ"א. <b>ר"ג</b> – $\dim V_{\lambda_i}=n-r(A-\lambda_iI)$ (מספר הו"ע הבת"ל). תמיד הר"ג קטן או שווה לר"א, ושניהם בין 1 ל-$n$; בפרט אם ר"א $=1$ אז ר"ג $=1$. הר"ג של 0: $n-r(A)$.` },
    { type: 'thm', title: 'ו"ע של ע"ע שונים', src: 'SHN',
      body: R`וקטורים עצמיים השייכים לערכים עצמיים שונים – בת"ל. לכן איחוד בסיסי המרחבים העצמיים הוא קבוצה בת"ל.` },
    { type: 'def', title: 'לכסינות', src: 'SHN',
      body: R`$T$ לכסין אם קיים בסיס $B$ עם $[T]_B$ אלכסונית. $A$ לכסינה אם היא דומה לאלכסונית: קיימת $P$ הפיכה עם $P^{-1}AP=D$.` },
    { type: 'thm', title: 'תנאי לכסון', src: 'SHN',
      body: R`התנאים שקולים:
<ol><li>$T$ ($A$) לכסין.</li><li>קיים ל-$V$ (ל-$F^n$) בסיס של ו"ע.</li><li>הפ"א מתפרק לגורמים ליניאריים מעל $F$ ולכל ע"ע ר"א = ר"ג.</li><li>סכום הריבויים הגיאומטריים $=n$.</li><li>$V=V_{\lambda_1}\oplus\dots\oplus V_{\lambda_k}$.</li></ol>
<b>תנאי מספיק:</b> $n$ ע"ע שונים ⇒ לכסינה (ההפך לא נכון).` },
    { type: 'thm', title: 'בניית P ו-D', src: 'SHN',
      body: R`עמודות $P$ – בסיס של ו"ע (איחוד בסיסי המרחבים העצמיים); $D$ – הע"ע באלכסון, <b>באותו סדר</b> כמו העמודות ב-$P$. $P=[I]^E_B$ היא מטריצת המעבר לבסיס הו"ע.<br>
<b>חזקות:</b> $A=PDP^{-1}\Rightarrow A^k=PD^kP^{-1}$, ו-$D^k=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k)$.` },
    { type: 'thm', title: 'ע"ע של פולינום במטריצה', src: 'SNH',
      body: R`אם $Av=\lambda v$ אז $A^kv=\lambda^kv$, ולכל פולינום $p$: $p(A)v=p(\lambda)v$ – כלומר $p(\lambda)$ ע"ע של $p(A)$. אם $A$ לכסינה אז כל פולינום ב-$A$ לכסין.` },
    { type: 'thm', title: 'משפט קיילי-המילטון', src: 'SHN',
      body: R`כל מטריצה ריבועית מאפסת את הפולינום האופייני שלה: אם $f_A(\lambda)=\lambda^n+a_{n-1}\lambda^{n-1}+\dots+a_0$ אז $A^n+a_{n-1}A^{n-1}+\dots+a_0I=0$.<br>
שימושים: (1) $A^{-1}$ כפולינום ב-$A$ (כשהמקדם החופשי $\neq0$); (2) כל חזקה $A^k$ היא צירוף של $I,A,\dots,A^{n-1}$.` },
    { type: 'thm', title: 'חוקי ברזל וקיצורי דרך', src: 'SHN',
      body: R`<ul>
<li>מטריצה משולשית/אלכסונית – הע"ע הם איברי האלכסון.</li>
<li>סכום כל שורה קבוע $K$ ⇒ $K$ ע"ע עם ו"ע $(1,\dots,1)^t$. סכום כל עמודה קבוע $K$ ⇒ $K$ ע"ע (של $A^t$, ולכן גם של $A$ – אבל $(1,\dots,1)^t$ לא בהכרח ו"ע של $A$).</li>
<li>$A$ הפיכה $\iff$ 0 לא ע"ע. לכסינות תלויה בריבויים, הפיכות – בערכי הע"ע: מטריצת האפס לכסינה ולא הפיכה.</li>
<li>מטריצה נילפוטנטית שאינה אפס – לעולם לא לכסינה.</li>
<li>לכסינה עם ע"ע יחיד $\alpha$ ⇒ $A=\alpha I$ (סקלרית).</li>
<li>אם $A$ ו-$B$ לכסינות, $A+B$ ו-$AB$ <b>לא בהכרח</b> לכסינות; אם הן גם מתחלפות – כן.</li>
<li>$A$ דומה ל-$D$ ו-$B$ דומה לאותה $D$ ⇒ $A$ דומה ל-$B$.</li>
<li>הפ"א חייב להיות מתוקן – למשל $7-5\lambda^2-3\lambda^3$ אינו פ"א של אף מטריצה $3\times3$.</li>
<li>אופרטור סיבוב ב-$\mathbb{R}^2$ (זווית $\theta\neq\pi k$) – לא לכסין מעל $\mathbb{R}$, לכסין מעל $\mathbb{C}$.</li>
</ul>` }
  ]
  };
})();

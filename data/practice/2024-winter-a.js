/* מועד א', סמסטר חורף תשפ"ד (1.5.24) – אלגברה 1מ1, 104064 */
(function () {
  const exam = { id: '2024WA', label: 'חורף תשפ״ד, מועד א׳ (1מ1)', date: '1.5.24', course: '104064' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}^5\to\mathbb{R}^{2\times2}$ ההעתקה
$$T(a,b,c,d,e)=\begin{pmatrix}a+b-c-2d&b-3c\\a+2b-4c-2d&3a+4b-6c-6d\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>יהי $U$ מרחב הפתרונות של $x+2z+2w+4t=0,\ y+5z-t=0$ (סדר הנעלמים $(x,y,z,w,t)$). מצאו בסיס ומימד ל-$\ker(T)\cap U$.</li>
<li>האם קיימת ב-$\operatorname{Im}(T)$ מטריצה סימטרית בעלת דטרמיננטה 9? אם כן – מצאו; אם לא – נמקו.</li>
</ol>`,
      hint: R`ג' – קחו איבר כללי של $U$ ואלצו עליו את תנאי הגרעין (בצורה המדורגת). ד' – איבר כללי בתמונה לפי הבסיס, ואז תנאי סימטריה ודטרמיננטה.`,
      solution: R`<p><b>א.</b> מדירוג: $a+2c-2d=0,\ b-3c=0$ ⇒ $(a,b,c,d,e)=(-2c+2d,3c,c,d,e)$. 5 נעלמים, 2 משוואות ⇒ מימד 3.
$B_{\ker T}=\{(-2,3,1,0,0),(2,0,0,1,0),(0,0,0,0,1)\}$.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=5-3=2$. $T=a\begin{pmatrix}1&0\\1&3\end{pmatrix}+b\begin{pmatrix}1&1\\2&4\end{pmatrix}+c\begin{pmatrix}-1&-3\\-4&-6\end{pmatrix}+d\begin{pmatrix}-2&0\\-2&-6\end{pmatrix}$;
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&0\\1&3\end{pmatrix},\begin{pmatrix}1&1\\2&4\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> איבר כללי ב-$U$: $(-2z-2w-4t,\ -5z+t,\ z,\ w,\ t)$. תנאי הגרעין: רכיב ראשון $=-2\cdot$שלישי $+2\cdot$רביעי, שני $=3\cdot$שלישי:
$-2z-2w-4t=-2z+2w$ ו-$-5z+t=3z$ ⇒ $t=8z,\ w=-t=-8z$.
$\ker T\cap U=\operatorname{span}\{(-18,3,1,-8,8)\}$, מימד 1.</p>
<p><b>ד.</b> איבר כללי: $\begin{pmatrix}a+b&b\\a+2b&3a+4b\end{pmatrix}$. סימטרית: $b=a+2b\Rightarrow a=-b$, ואז $\begin{pmatrix}0&b\\b&b\end{pmatrix}$ עם דטרמיננטה $-b^2=9$ – אין פתרון ממשי. <b>לא קיימת.</b></p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}2&1&-2\\-1&4&-2\\-1&1&1\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>מצאו את כל השלשות $\alpha,\beta,\gamma\in\mathbb{R}$ כך ש-$A$ תהיה דומה ל-$B=\begin{pmatrix}3&\gamma&6\\0&\alpha&1\\0&0&\beta\end{pmatrix}$.</li>
<li>תהי $C=A-2I$. הוכיחו כי $C^{101}=C$.</li>
</ol>`,
      hint: R`ג' – $B$ משולשת: הע"ע על האלכסון, ו-$B$ חייבת להיות לכסינה (ר"ג של 3 שווה 2). ד' – הע"ע של $C$ הם $\pm1$.`,
      solution: R`<p><b>א.</b> $|\lambda I-A|\underset{C_1\to C_1+C_2}{=}\cdots\underset{R_2\to R_2-R_1}{=}(\lambda-3)^2(\lambda-1)$.
$\lambda_1=3$: ר"א 2, ר"ג $3-r(A-3I)=2$. $\lambda_2=1$: ר"א 1, ר"ג 1.</p>
<p><b>ב.</b> $\lambda=3$: $a-b+2c=0$, בסיס $\{(1,1,0),(-2,0,1)\}$. $\lambda=1$: $a=b=c$, בסיס $\{(1,1,1)\}$ (גם: סכום כל שורה 1).
$P=\begin{pmatrix}1&-2&1\\1&0&1\\0&1&1\end{pmatrix}$, $D=\operatorname{diag}(3,3,1)$.</p>
<p><b>ג.</b> $B$ צריכה להיות דומה ל-$D$, ולכן $(\alpha,\beta)=(1,3)$ או $(3,1)$, ור"ג של 3 צריך להיות 2.
$(\alpha,\beta)=(1,3)$: $r\begin{pmatrix}0&\gamma&6\\0&-2&1\\0&0&0\end{pmatrix}=1$ ⇒ $\gamma=-12$.
$(\alpha,\beta)=(3,1)$: $r\begin{pmatrix}0&\gamma&6\\0&0&1\\0&0&-2\end{pmatrix}=1$ ⇒ $\gamma=0$.
סיכום: $(\alpha,\beta,\gamma)=(1,3,-12)$ או $(3,1,0)$.</p>
<p><b>ד.</b> $A$ לכסינה ולכן כל פולינום ב-$A$ לכסין; הע"ע של $C$: $3-2,3-2,1-2=1,1,-1$. עם אותה $P$: $C=P\operatorname{diag}(1,1,-1)P^{-1}$, ולכן
$C^{101}=P\operatorname{diag}(1^{101},1^{101},(-1)^{101})P^{-1}=P\operatorname{diag}(1,1,-1)P^{-1}=C$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'det', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: אם $A,B\in\mathbb{R}^{5\times5}$ מקיימות $AB+BA=0$, אז לפחות אחת מהן לא הפיכה.`,
      hint: R`$AB=-BA$; קחו דטרמיננטה וזכרו $|kA|=k^n|A|$ עם $n=5$ אי-זוגי.`,
      solution: R`<p><b>הטענה נכונה.</b> $|AB|=|-BA|=(-1)^5|BA|=-|AB|$. לפי משפט המכפלה $|A||B|=-|A||B|$, כלומר $2|A||B|=0$, ולכן $|A|=0$ או $|B|=0$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'basis', type: 'tf', answer: true,
      text: R`יהי $B=\{v_1,v_2,v_3,v_4\}$ בסיס של $V$. הוכיחו או הפריכו: גם $S=\{v_1,\ \alpha v_1-v_2,\ \alpha v_1-v_3,\ \alpha v_1-v_4\}$ הוא בסיס של $V$ לכל $\alpha\in F$.`,
      hint: R`"השלישי חינם": 4 וקטורים במרחב ממימד 4 – מספיק לבדוק בת"ל, דרך וקטורי הקואורדינטות.`,
      solution: R`<p><b>הטענה נכונה.</b> $\dim V=4$ ובקבוצה 4 איברים – מספיק לבדוק בת"ל. וקטורי הקואורדינטות לפי $B$ כשורות:
$$\begin{pmatrix}1&0&0&0\\\alpha&-1&0&0\\\alpha&0&-1&0\\\alpha&0&0&-1\end{pmatrix}\to\begin{pmatrix}1&0&0&0\\0&-1&0&0\\0&0&-1&0\\0&0&0&-1\end{pmatrix}$$
4 וקטורים בת"ל ⇒ $S$ בסיס.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`יהי $T:V\to V$ אופרטור לינארי. הוכיחו או הפריכו: אם $\ker(T)=\ker(T^2)$, אז $\operatorname{Im}(T)\cap\ker(T)=\{0\}$.`,
      hint: R`קחו $v$ בחיתוך, $v=T(w)$, והפעילו $T$.`,
      solution: R`<p><b>הטענה נכונה.</b> יהי $v\in\operatorname{Im}T\cap\ker T$: $T(v)=0$ וקיים $w$ עם $T(w)=v$. אז $T^2(w)=T(v)=0$, כלומר $w\in\ker T^2=\ker T$, ולכן $v=T(w)=0$.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'complex', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A\in\mathbb{C}^{3\times3}$ כך ש-$A^3=I$, אז $\lambda=1$ הוא ערך עצמי של $A$.`,
      hint: R`נסו מטריצה סקלרית עם שורש יחידה מסדר 3 שאינו 1.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\operatorname{cis}120^\circ\cdot I$: $A^3=\operatorname{cis}(3\cdot120^\circ)I=I$, אבל $A$ אלכסונית והע"ע שלה – איברי האלכסון – שונים מ-1.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'א',
      text: R`תהי $A=\begin{pmatrix}1&0&1\\0&2&\bar z\\z^6+2&z^3&z^2-1\end{pmatrix}\in\mathbb{C}^{3\times3}$. אזי:`,
      options: [
        R`קיימים בדיוק שני ערכים שונים של $z$ עבורם $A$ סימטרית, ומכפלתם 1.`,
        R`קיימים בדיוק שני ערכים שונים של $z$ עבורם $A$ סימטרית, ומכפלתם 0.`,
        R`קיימים בדיוק שני ערכים שונים של $z$ עבורם $A$ סימטרית, ומכפלתם $-1$.`,
        R`קיימים בדיוק שלושה ערכים שונים של $z$ עבורם $A$ סימטרית, ומכפלתם 1.`,
        R`קיימים בדיוק שלושה ערכים שונים של $z$ עבורם $A$ סימטרית, ומכפלתם $-1$.`
      ],
      hint: R`סימטרית ⇔ $z^6+2=1$ וגם $z^3=\bar z$. פתרו כל משוואה בהצגה קוטבית ומצאו פתרונות משותפים.`,
      solution: R`<p>$z^6=-1$: $z=\operatorname{cis}(30^\circ+60^\circ k)$ – ארגומנטים $30^\circ,90^\circ,150^\circ,210^\circ,270^\circ,330^\circ$.
$z^3=\bar z$: $r^3\operatorname{cis}3\theta=r\operatorname{cis}(-\theta)$ ⇒ $r=0,1$, $\theta=90^\circ k$ – עבור $r=1$: $0^\circ,90^\circ,180^\circ,270^\circ$.
משותפים: $\operatorname{cis}90^\circ,\ \operatorname{cis}270^\circ$, ומכפלתם $\operatorname{cis}360^\circ=1$.</p>
<p><b>תשובה: א' (A).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'systems', type: 'mc', answer: 'ה',
      text: R`תהי $A\in\mathbb{R}^{m\times n}$. סמנו את הטענה הנכונה:`,
      options: [
        R`אם ל-$Ax=0$ יש אינסוף פתרונות, אז ל-$A^tx=0$ יש אינסוף פתרונות.`,
        R`אם ל-$Ax=0$ יש אינסוף פתרונות, אז קיים $c\in\mathbb{R}^m$ עבורו ל-$Ax=c$ אין פתרון.`,
        R`אם ל-$Ax=b$ יש פתרון לכל $b$, אז $\operatorname{rank}(A)=n$.`,
        R`אם ל-$Ax=0$ יש פתרון יחיד, אז גם ל-$Ax=b$ יש פתרון יחיד.`,
        R`אם קיים $b\in\mathbb{R}^n$ עבורו ל-$A^tx=b$ אין פתרון, אז ל-$Ax=0$ יש אינסוף פתרונות.`
      ],
      hint: R`$r(A)=r(A^t)$. אם ל-$A^tx=b$ אין פתרון עבור $b$ כלשהו – מה זה אומר על דרגת $A^t$ ביחס למספר השורות שלה?`,
      solution: R`<p>A. לא: $(A|0)=\begin{pmatrix}1&0&0\\0&1&1\end{pmatrix}$ – אינסוף פתרונות, אבל ל-$A^tx=0$ פתרון יחיד.<br>
B. לא: אותה $A$ – לכל $c\in\mathbb{R}^2$ יש פתרון.<br>
C. לא: אותה $A$ – $r(A)=2\lt n=3$.<br>
D. לא: $\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}$ – פתרון יחיד להומוגנית, אבל עבור $b=(1,1,1)^t$ אין פתרון.<br>
E. נכון: אם ל-$A^tx=b$ אין פתרון, בדירוג של $A^t$ מתאפסת שורה, כלומר $r(A^t)\lt n$. $r(A)=r(A^t)\lt n$, ולכן ל-$Ax=0$ (עם $n$ נעלמים) אינסוף פתרונות.</p>
<p><b>תשובה: ה' (E).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'lt', type: 'mc', answer: 'ג',
      text: R`יהיו $S_1=\{(1,1,1,1),(1,2,2,1),(1,3,3,1)\}$, $S_2=\{(0,0,1,1),(1,2,0,0),(2,4,3,3)\}$, ויהי $T:\mathbb{R}^4\to\mathbb{R}^4$ אופרטור כך ש-$\ker T=\operatorname{sp}\{S_1\}$, $\operatorname{Im}T=\operatorname{sp}\{S_2\}$. סמנו את הטענה הנכונה:`,
      options: [
        'לא קיים אופרטור לינארי המקיים את הדרישה.',
        'קיים אופרטור לינארי יחיד המקיים את הדרישה.',
        R`$\mathbb{R}^4=\ker(T)\oplus\operatorname{Im}(T)$`,
        R`$(1,1,1,1)\in\operatorname{Im}T$`,
        R`$\dim(\ker(T^2))=3$`
      ],
      hint: R`דרגו את $S_1$ ואת $S_2$ – בכל אחת יש וקטור מיותר. בדקו אם איחוד הבסיסים בת"ל.`,
      solution: R`<p>מדירוג: $\ker T=\operatorname{sp}\{(1,1,1,1),(1,2,2,1)\}$, $\operatorname{Im}T=\operatorname{sp}\{(1,2,0,0),(0,0,1,1)\}$; איחוד 4 הוקטורים בת"ל.<br>
A. לא: $T(1,1,1,1)=T(1,2,2,1)=0$, $T(0,0,1,0)=(1,2,0,0)$, $T(0,0,0,1)=(0,0,1,1)$ – קיים לפי משפט הקיום והיחידות.<br>
B. לא: אפשר להגדיר אחרת על $(0,0,1,0),(0,0,0,1)$ עם אותה תמונה.<br>
C. נכון: איחוד הבסיסים בת"ל ⇒ $\ker T+\operatorname{Im}T=\mathbb{R}^4$, ולפי משפט המימדים הראשון החיתוך 0.<br>
D. לא: אינו צירוף של בסיס התמונה.<br>
E. לא: מהסכום הישר $\ker T=\ker T^2$, ולכן המימד 2.</p>
<p><b>תשובה: ג' (C).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'eigen', type: 'mc', answer: 'ב',
      text: R`תהי $A\in\mathbb{R}^{4\times4}$ מדרגה 2 המקיימת: (1) $A(2,1,0,4)^t=(1,\tfrac12,0,2)^t$; (2) $|I+2A|=0$. אז $\operatorname{trace}(A)$ שווה ל:`,
      options: ['−2', '0', R`$\tfrac12$`, R`$-1\tfrac12$`, 'לא ניתן לקבוע על פי הנתונים.'],
      hint: R`דרגה 2 ⇒ 0 ע"ע עם ר"ג 2. מ-(1) – ע"ע $\tfrac12$. מ-(2) – $|-\tfrac12I-A|=0$.`,
      solution: R`<p>$A$ מסדר 4 ודרגה 2 ⇒ $\lambda=0$ ע"ע עם ר"ג $4-2=2$ (ר"א לפחות 2). מ-(1): $\lambda=\tfrac12$. מ-(2): $0=|I+2A|=(-2)^4|-\tfrac12I-A|$ ⇒ $\lambda=-\tfrac12$. מצאנו 4 ע"ע: $0,0,\tfrac12,-\tfrac12$, ולכן $\operatorname{trace}(A)=0$.</p>
<p><b>תשובה: ב' (B).</b></p>`
    }
  );
})();

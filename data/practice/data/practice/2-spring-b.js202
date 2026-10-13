/* מועד ב', סמסטר אביב תשפ"ב (7.10.22) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2022B', label: 'אביב תשפ״ב, מועד ב׳', date: '7.10.22', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}_3[x]$ ההעתקה הלינארית
$$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=(2a+2b-3d)+(a+b+c-2d)x+(-b+d)x^2+(-2c+d)x^3$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>הוכיחו כי כל מטריצה $A$ ב-$\ker(T)$ היא לכסינה.</li>
<li>יהי $W=\{p(x)\in\mathbb{R}_3[x]\mid p'(1)=p''(1)=0\}$. מצאו בסיס ומימד ל-$\operatorname{Im}(T)\cap W$.</li>
<li>הוכיחו או הפריכו: לא קיימת העתקה לינארית $S:\mathbb{R}_3[x]\to\mathbb{R}^3$ כך ש-$S\circ T$ חח"ע.</li>
</ol>`,
      hint: R`ג' – מטריצה מדרגה 1 עם עקבה שונה מ-0 (או: ע"ע 0 וע"ע נוסף = העקבה). ד' – קחו איבר כללי של התמונה (לפי הבסיס שמצאתם) ואלצו עליו את תנאי $W$.`,
      solution: R`<p><b>א.</b> מדירוג: $2a=d,\ b=d,\ 2c=d$. $\ker T=\left\{\begin{pmatrix}d&2d\\d&2d\end{pmatrix}\right\}=\operatorname{span}\left\{\begin{pmatrix}1&2\\1&2\end{pmatrix}\right\}$, מימד 1.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=4-1=3$. $T=a(2+x)+b(2+x-x^2)+c(x-2x^3)+d(-3-2x+x^2+x^3)$; מדירוג:
$B_{\operatorname{Im}T}=\{1+x^3,\ x-2x^3,\ x^2\}$.</p>
<p><b>ג.</b> המטריצות בגרעין: $\begin{pmatrix}d&2d\\d&2d\end{pmatrix}$. אם $d=0$ – מטריצת האפס, אלכסונית. לכל $d\neq0$: דרגה 1 (לא הפיכה ⇒ 0 ע"ע) ועקבה $3d\neq0$ ⇒ הע"ע השני הוא $3d$. מטריצה מסדר 2 עם שני ע"ע שונים – לכסינה.</p>
<p><b>ד.</b> איבר כללי בתמונה: $a(1+x^3)+b(x-2x^3)+c(x^2)=a+bx+cx^2+(a-2b)x^3$.
$p'(1)=0\Rightarrow b+2c+3a-6b=0$, $p''(1)=0\Rightarrow 2c+6a-12b=0$. מכאן $3a=7b,\ c=-b$:
$\operatorname{Im}T\cap W=\left\{\tfrac73b(1+x^3)+b(x-2x^3)-bx^2\right\}$, בסיס $\left\{\tfrac73+x-x^2+\tfrac13x^3\right\}$, מימד 1.</p>
<p><b>ה. הטענה נכונה.</b> $S\circ T:\mathbb{R}^{2\times2}\to\mathbb{R}^3$, מימד התמונה לכל היותר 3 ולכן מימד הגרעין לפחות 1 – לא חח"ע. (או: ניקח $0\neq A\in\ker T$, אז $S(T(A))=S(0)=0$.)</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}2&1&1\\1&2&1\\2&2&3\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>יהי $T:\mathbb{R}_2[x]\to\mathbb{R}_2[x]$ האופרטור המקיים $[T]_B=A-I$ כאשר $B=\{1,\ 1+x,\ 1+x+x^2\}$. מצאו בסיס ל-$\ker(T)$.</li>
</ol>`,
      hint: R`ג' – $\ker(A-I)$ הוא המרחב העצמי של $\lambda=1$, שכבר חישבתם. הוקטורים שמתקבלים הם וקטורי קואורדינטות לפי $B$ – תרגמו חזרה לפולינומים.`,
      solution: R`<p><b>א.</b>
$$|\lambda I-A|\underset{C_1-C_2}{=}\begin{vmatrix}\lambda-1&-1&-1\\-\lambda+1&\lambda-2&-1\\0&-2&\lambda-3\end{vmatrix}\underset{R_2+R_1}{=}(\lambda-1)\left[(\lambda-3)^2-4\right]=(\lambda-1)^2(\lambda-5)$$
$\lambda_1=1$: ר"א 2, ר"ג 2. $\lambda_2=5$: ר"א 1, ר"ג 1.</p>
<p><b>ב.</b> $\lambda_1=1$: $x+y+z=0$, בסיס $\{(-1,1,0),(-1,0,1)\}$. $\lambda_2=5$: $x-y=0,\ 2y-z=0$, בסיס $\{(1,1,2)\}$.
$P=\begin{pmatrix}-1&-1&1\\1&0&1\\0&1&2\end{pmatrix}$, $D=\begin{pmatrix}1&0&0\\0&1&0\\0&0&5\end{pmatrix}$.</p>
<p><b>ג.</b> הגרעין לפי $B$ הוא המרחב העצמי של $\lambda_1=1$: $B_{[\ker T]_B}=\{(-1,1,0),(-1,0,1)\}$. לכן
$B_{\ker T}=\{-v_1+v_2,\ -v_1+v_3\}=\{-1+(1+x),\ -1+(1+x+x^2)\}=\{x,\ x+x^2\}$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'inverse', type: 'tf', answer: true,
      text: R`תהי $A\in\mathbb{R}^{n\times n}$. הוכיחו או הפריכו: אם $A$ לא הפיכה, אז קיימת מטריצה $B\neq0$ כך ש-$AB=0$.`,
      hint: R`$A$ לא הפיכה ⇒ ל-$Ax=0$ יש פתרון לא טריוויאלי $v$. כפל מטריצות עובד עמודה-עמודה.`,
      solution: R`<p><b>הטענה נכונה.</b> $A$ לא הפיכה ולכן לממ"ל $Ax=0$ יש פתרון לא טריוויאלי $0\neq v\in\mathbb{R}^n$. נבנה $B$ שעמודתה הראשונה $v$ ושאר העמודות 0. אז $B\neq0$ ו-$AB=(Av\ A0\ \cdots\ A0)=0$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'span', type: 'tf', answer: false,
      text: R`יהי $V$ מרחב וקטורי מעל $F$, $W$ תת-מרחב של $V$, ויהיו $v_1,v_2\in V$ כך ש-$v_1,v_2\notin W$. הוכיחו או הפריכו: אם $\{v_1,v_2\}$ בלתי תלויה לינארית אז $\operatorname{span}\{v_1,v_2\}\cap W=\{0\}$.`,
      hint: R`ב-$\mathbb{R}^2$ – קחו את $W$ להיות ישר שאינו אחד הצירים.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $V=\mathbb{R}^2$, $W=\operatorname{sp}\{(1,1)\}$, $v_1=(1,0)$, $v_2=(0,1)$: בת"ל ולא ב-$W$, אבל $\operatorname{span}\{v_1,v_2\}\cap W=W\neq\{0\}$.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`יהי $T:V\to V$ אופרטור לינארי כך ש-$T^3=0$, ויהי $v\in V$ כך ש-$T^2(v)\neq0$. הוכיחו או הפריכו: $\{v,T(v),T^2(v)\}$ בלתי תלויה לינארית.`,
      hint: R`הניחו $\alpha v+\beta T(v)+\gamma T^2(v)=0$ והפעילו $T$ שוב ושוב.`,
      solution: R`<p><b>הטענה נכונה.</b> נניח $\alpha v+\beta T(v)+\gamma T^2(v)=0$. נפעיל $T$: $\alpha T(v)+\beta T^2(v)=0$ (כי $T^3=0$). נפעיל שוב: $\alpha T^2(v)=0$, ומכיוון ש-$T^2(v)\neq0$ – $\alpha=0$. נציב: $\beta T^2(v)=0\Rightarrow\beta=0$, ואז $\gamma T^2(v)=0\Rightarrow\gamma=0$. לכן הקבוצה בת"ל.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: אם $A$ מטריצה ריבועית ממשית בעלת פולינום אופייני $f(\lambda)=\lambda(\lambda-1)(\lambda-2)$ אז $\operatorname{rank}(A^k)=2$ לכל $k\in\mathbb{N}$.`,
      hint: R`3 ע"ע שונים למטריצה מסדר 3 ⇒ לכסינה. $A^k$ דומה ל-$D^k$, ולמטריצות דומות אותה דרגה.`,
      solution: R`<p><b>הטענה נכונה.</b> הפ"א ממעלה 3, ולכן $A$ מסדר 3 עם 3 ע"ע שונים $0,1,2$ – לכסינה, ודומה ל-$D=\operatorname{diag}(0,1,2)$. לכן $A^k$ דומה ל-$D^k=\operatorname{diag}(0,1,2^k)$, ולמטריצות דומות אותה דרגה: $\operatorname{rank}(A^k)=\operatorname{rank}(D^k)=2$.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ה',
      text: R`תהי $A=\begin{pmatrix}1&0&z&w&0\\0&1&0&z&w\\3&0&z&0&0\\0&3&0&z&0\\0&0&3&0&z\end{pmatrix}\in\mathbb{C}^{5\times5}$ כאשר $w=\dfrac{1+i}{\sqrt{27}}$. יהיו $z_1,\dots,z_k$ כל הפתרונות של $\det(A)=0$ ונסמן $t=\arg(z_1\cdots z_k)$ ($0^\circ\le\arg\lt 360^\circ$). אזי:`,
      options: [R`$t=0^\circ$`, R`$t=90^\circ$`, R`$t=120^\circ$`, R`$t=210^\circ$`, R`$t=270^\circ$`],
      hint: R`אפסו את ה-3-ים בעזרת פעולות שורה ($R_3-3R_1$ וכו'), ואז פתחו. אפשר לסיים בעזרת וייטה: מכפלת שורשי $z^n=c$.`,
      solution: R`<p>אחרי $R_3\to R_3-3R_1$, $R_4\to R_4-3R_2$ ואיפוס נוסף, ופיתוח לפי העמודות הראשונות:
$$|A|=\begin{vmatrix}-2z&-3w&0\\0&-2z&-3w\\3&0&z\end{vmatrix}=4z^3+27w^2=4z^3+27\cdot\frac{(1+i)^2}{27}=4z^3+2i$$
$4z^3=-2i\Rightarrow z^3=-\tfrac12 i=\tfrac12\operatorname{cis}270^\circ$, ולכן $z_j=\sqrt[3]{\tfrac12}\operatorname{cis}(90^\circ+120^\circ k)$, ו-$\arg(z_1z_2z_3)=90^\circ+210^\circ+330^\circ=630^\circ\equiv270^\circ$.
(לפי וייטה: מכפלת שורשי $z^3=c$ היא $(-1)^{n+1}c=c=-\tfrac12i$, שהארגומנט שלו $270^\circ$.)</p>
<p><b>תשובה: ה'.</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'basis', type: 'mc', answer: 'ג',
      text: R`יהי $V$ מרחב וקטורי מעל $\mathbb{R}$ ו-$v_1,v_2,v_3\in V$. נסמן $S=\{v_1,v_2,v_3\}$ ו-
$T=\{\alpha v_1+v_2+v_3,\ v_1+\alpha v_2+v_3,\ v_1+v_2+\alpha v_3\}$, $\alpha\in\mathbb{R}$. אזי:`,
      options: [
        R`קיים $\alpha$ עבורו $\dim(\operatorname{span}\{S\})\lt \dim(\operatorname{span}\{T\})$.`,
        R`אם $S$ בת"ל אז $T$ בת"ל לכל $\alpha$.`,
        R`אם $S$ בת"ל אז קיימים בדיוק שני ערכים שונים של $\alpha$ עבורם $T$ ת"ל.`,
        R`אם $S$ בת"ל אז $T$ בת"ל לכל $\alpha\neq1$.`,
        R`אם $S$ ת"ל אז קיימים בדיוק שני ערכים שונים של $\alpha$ עבורם $T$ ת"ל.`
      ],
      hint: R`אם $S$ בת"ל – היא בסיס ל-$\operatorname{span}S$, ומשפט הקואורדינטות: $T$ בת"ל אם"ם וקטורי הקואורדינטות שלה בת"ל. חשבו דטרמיננטה.`,
      solution: R`<p>א. לא: $T\subset\operatorname{span}S$ ולכן $\operatorname{span}T\subseteq\operatorname{span}S$.<br>
ב–ד. אם $S$ בת"ל היא בסיס ל-$\operatorname{span}S$. וקטורי הקואורדינטות של $T$ הם שורות $\begin{pmatrix}\alpha&1&1\\1&\alpha&1\\1&1&\alpha\end{pmatrix}$, שהדטרמיננטה שלה $(\alpha+2)(\alpha-1)^2$. לכן $T$ ת"ל אם"ם $\alpha=-2,1$ – בדיוק שני ערכים. ג' נכון, ב' ו-ד' לא.<br>
ה. לא: אם $S$ ת"ל אז $\dim\operatorname{span}S\le2$, ו-3 וקטורים במרחב ממימד $\le2$ – $T$ ת"ל לכל $\alpha$.</p>
<p><b>תשובה: ג'.</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'eigen', type: 'mc', answer: 'ב',
      text: R`נתונה $A=\begin{pmatrix}a&2&2\\2&a&2\\2&2&a\end{pmatrix}\in\mathbb{R}^{3\times3}$. אזי:`,
      options: [
        R`קיים בדיוק ערך אחד של $a$ עבורו $A$ לכסינה.`,
        R`קיים בדיוק ערך אחד של $a$ עבורו $A$ דומה למטריצה $\begin{pmatrix}0&7&0\\0&6&0\\0&5&0\end{pmatrix}$.`,
        R`לא קיים אף ערך של $a$ עבורו $A$ שקולת שורות למטריצה $\begin{pmatrix}1&2&1\\0&3&3\\0&2&-5\end{pmatrix}$.`,
        R`קיים ערך של $a$ עבורו ל-$A$ יש ע"ע מריבוי אלגברי 3.`,
        R`קיים בדיוק ערך אחד של $a$ עבורו $(1,1,1)^t$ הוא וקטור עצמי של $A$.`
      ],
      hint: R`סכום כל שורה קבוע ($a+4$) ⇒ $a+4$ ע"ע עם ו"ע $(1,\dots,1)^t$. הפ"א: $(\lambda-(a+4))(\lambda-(a-2))^2$.`,
      solution: R`<p>$|\lambda I-A|=(\lambda-(a+4))(\lambda-(a-2))^2$. $\lambda_1=a+4\neq a-2=\lambda_2$ תמיד. ר"ג של $a-2$: $3-r\begin{pmatrix}-2&-2&-2\\-2&-2&-2\\-2&-2&-2\end{pmatrix}=2$, ולכן $A$ לכסינה לכל $a$ ודומה ל-$\operatorname{diag}(a+4,a-2,a-2)$.<br>
א. לא – לכסינה לכל $a$.<br>
ב. נכון – המטריצה הנתונה לכסינה (דרגה 1, עקבה 6): ע"ע 0 עם ר"א = ר"ג = 2 ו-6 מריבוי 1. צריך $A$ מדרגה 1 ועקבה 6; $|A|=(a+4)(a-2)^2$, ודרגה 1 רק עבור $a=2$, ואז $A$ עם עקבה 6.<br>
ג. לא – הנתונה בעלת דטרמיננטה $-21$, הפיכה ולכן ש"ש ל-$I$; לכל $a\neq2,-4$ גם $A$ הפיכה – אינסוף ערכים.<br>
ד. לא – תמיד 2 ע"ע שונים.<br>
ה. לא – לכל $a$, $(1,1,1)^t$ ו"ע עם ע"ע $a+4$.</p>
<p><b>תשובה: ב'.</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'repr', type: 'mc', answer: 'ד',
      text: R`יהי $V$ מרחב וקטורי מעל $\mathbb{R}$ ו-$B=\{v_1,v_2,v_3,v_4\}$ בסיס סדור. יהי $T:V\to V$ אופרטור כך ש-
$[T]_B=\begin{pmatrix}0&0&1&2\\0&0&3&4\\0&0&0&0\\0&0&0&0\end{pmatrix}$. אזי:`,
      options: [R`$\operatorname{Im}T\cap\ker T=\{0\}$`, R`הקבוצה $\{v_3,v_4\}$ היא בסיס ל-$\operatorname{Im}T$.`, R`$T$ לכסין.`, R`$\operatorname{Im}T=\ker T$`, R`$V=\operatorname{Im}T\oplus\ker T$`],
      hint: R`קראו מהעמודות: $T(v_1)=T(v_2)=0$, $T(v_3)=v_1+3v_2$, $T(v_4)=2v_1+4v_2$.`,
      solution: R`<p>$T(v_1)=T(v_2)=0$, $T(v_3)=v_1+3v_2$, $T(v_4)=2v_1+4v_2$. לכן $\{v_1,v_2\}$ גם בגרעין וגם בתמונה; כל אחד ממימד לפחות 2 וסכום המימדים 4, ולכן שניהם ממימד 2 ו-$\{v_1,v_2\}$ בסיס לשניהם: $\operatorname{Im}T=\ker T$.<br>
$T$ לא לכסין: $[T]_B$ משולשית עליונה, ע"ע 0 מר"א 4 אבל ר"ג $4-r([T]_B)=2$.</p>
<p><b>תשובה: ד'.</b></p>`
    },
    {
      exam, q: 'שאלה 8', topic: 'eigen', type: 'mc', answer: 'ב',
      text: R`תהי $A\in\mathbb{R}^{2\times2}$ המקיימת $\operatorname{trace}(A)=1,\ \det(A)=-6$. אזי $\det(2A^3-3A^2-17I)$ שווה ל:`,
      options: ['0', '−450', '102', '−18', '210'],
      hint: R`למטריצה $2\times2$: פ"א $\lambda^2-\operatorname{tr}(A)\lambda+\det(A)$. אם $\lambda$ ע"ע של $A$ אז $p(\lambda)$ ע"ע של $p(A)$, והדטרמיננטה = מכפלת הע"ע.`,
      solution: R`<p>$f(\lambda)=\lambda^2-\lambda-6=(\lambda+2)(\lambda-3)$, ע"ע $3,-2$. הע"ע של $2A^3-3A^2-17I$:
$2\cdot27-3\cdot9-17=10$ ו-$2(-8)-3\cdot4-17=-45$. הדטרמיננטה היא מכפלתם: $-450$.</p>
<p><b>תשובה: ב'.</b></p>`
    }
  );
})();

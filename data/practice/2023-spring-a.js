/* מועד א', סמסטר אביב תשפ"ג (10.7.23) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2023A', label: 'אביב תשפ״ג, מועד א׳', date: '10.7.23', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}_3[x]\to\mathbb{R}^{2\times2}$ ההעתקה הלינארית
$$T(a+bx+cx^2+dx^3)=\begin{pmatrix}a+2b+4c&a+2b+4c\\0&-a+b-c\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>יהי $W=\{p(x)\in\mathbb{R}_3[x]\mid p'(1)=p(0)\}$. מצאו בסיס ומימד ל-$W\cap\ker(T)$.</li>
<li>הוכיחו או הפריכו: אם $A\in\operatorname{Im}(T)$ אז $A$ מדורגת.</li>
</ol>`,
      hint: R`ג' – קחו איבר כללי של הגרעין מסעיף א' ואלצו עליו את התנאי $p'(1)=p(0)$.`,
      solution: R`<p><b>א.</b> מדירוג: $a=-2c,\ b=-c$, ו-$d$ חופשי.
$\ker T=\{-2c-cx+cx^2+dx^3\}=\operatorname{span}\{-2-x+x^2,\ x^3\}$, $\dim\ker T=2$ (שני הפולינומים לא פרופורציונליים).</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=4-2=2$. $T=a\begin{pmatrix}1&1\\0&-1\end{pmatrix}+b\begin{pmatrix}2&2\\0&1\end{pmatrix}+c\begin{pmatrix}4&4\\0&-1\end{pmatrix}$; מדירוג וקטורי הקואורדינטות:
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&1\\0&-1\end{pmatrix},\begin{pmatrix}0&0\\0&1\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> $p=-2c-cx+cx^2+dx^3$: $p'(1)=-c+2c+3d$ ו-$p(0)=-2c$, ולכן $d=-c$.
$W\cap\ker T=\operatorname{span}\{-2-x+x^2-x^3\}$, מימד 1.</p>
<p><b>ד. הטענה לא נכונה.</b> $\begin{pmatrix}0&0\\0&1\end{pmatrix}$ שייכת לתמונה ואינה מדורגת.</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`יהי $T:\mathbb{R}^4\to\mathbb{R}^4$ האופרטור $T(a,b,c,d)^t=(a+b,\ a+b,\ 3c+3d,\ -c-d)^t$.
<ol class="parts">
<li>מצאו את $A=[T]_E$ לפי הבסיס הסטנדרטי.</li>
<li>מצאו בסיס סדור $B$ של $\mathbb{R}^4$ כך ש-$[T]_B$ אלכסונית, ומצאו את $[T]_B$.</li>
<li>מצאו $\alpha,\beta\in\mathbb{R}$ כך ש-$A^5=\alpha A^3+\beta A^2$.</li>
<li>מצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}A^5P=D$.</li>
</ol>`,
      hint: R`ג' – קיילי-המילטון: $A$ מאפסת את הפ"א שלה. הכפילו ב-$A$ והציבו. ד' – אם $P^{-1}AP=C$ אז $A^5=PC^5P^{-1}$.`,
      solution: R`<p><b>א.</b> $A=\begin{pmatrix}1&1&0&0\\1&1&0&0\\0&0&3&3\\0&0&-1&-1\end{pmatrix}$.</p>
<p><b>ב.</b> אחרי $C_1\to C_1-C_2$, $C_3\to C_3-C_4$ ו-$R_2\to R_2+R_1$, $R_4\to R_4+R_3$ מקבלים $|\lambda I-A|=\lambda^2(\lambda-2)^2$: $\lambda_1=0,\lambda_2=2$, כל אחד מר"א 2.<br>
$\lambda=0$: $a+b=0,\ c+d=0$, בסיס $\{(1,-1,0,0),(0,0,1,-1)\}$.<br>
$\lambda=2$: $a-b=0,\ c+3d=0$, בסיס $\{(1,1,0,0),(0,0,-3,1)\}$.<br>
$B=\{(1,-1,0,0),(0,0,1,-1),(1,1,0,0),(0,0,-3,1)\}$, $[T]_B=\operatorname{diag}(0,0,2,2)=C$.</p>
<p><b>ג.</b> $f(\lambda)=\lambda^2(\lambda-2)^2=\lambda^2(\lambda^2-4\lambda+4)$, ולפי קיילי-המילטון $A^4-4A^3+4A^2=0$, כלומר $A^4=4A^3-4A^2$. נכפול ב-$A$:
$A^5=4A^4-4A^3=4(4A^3-4A^2)-4A^3=12A^3-16A^2$. לכן $\alpha=12,\ \beta=-16$.</p>
<p><b>ד.</b> $P^{-1}AP=C$ עם $P$ שעמודותיה וקטורי $B$, ולכן $A=PCP^{-1}$ ו-$A^5=PC^5P^{-1}$:
$P=\begin{pmatrix}1&0&1&0\\-1&0&1&0\\0&1&0&-3\\0&-1&0&1\end{pmatrix}$, $D=C^5=\operatorname{diag}(0,0,2^5,2^5)$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'basis', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: בכל בסיס של מרחב הפולינומים הממשיים ממעלה קטנה או שווה 5, לכל היותר 4 איברי הבסיס הם פולינומים ממעלה לכל היותר 3.`,
      hint: R`פולינומים ממעלה $\le3$ יושבים ב-$\mathbb{R}_3[x]$ שמימדו 4. כמה וקטורים בת"ל יכולים להיות בו?`,
      solution: R`<p><b>הטענה נכונה.</b> אם בבסיס של $\mathbb{R}_5[x]$ היו לפחות 5 פולינומים ממעלה $\le3$, הם שייכים ל-$\mathbb{R}_3[x]$ שמימדו 4, ולכן תלויים לינארית – ולא יכולים להיות חלק מבסיס.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'inverse', type: 'tf', answer: true,
      text: R`יהיו $A,B\in\mathbb{R}^{n\times n}$ כך ש-$A$ הפיכה. הוכיחו או הפריכו: אם $BAB=0$ אז $\operatorname{rank}(B)\le\frac n2$.`,
      hint: R`אם $AB=0$ אז $r(A)+r(B)\le n$. וכפל במטריצה הפיכה לא משנה דרגה.`,
      solution: R`<p><b>הטענה נכונה.</b> ידוע: אם $AB=0$ אז $r(A)+r(B)\le n$. כאן $(BA)B=0$, לכן $r(BA)+r(B)\le n$. $A$ הפיכה ולכן $r(BA)=r(B)$, ומקבלים $2r(B)\le n$.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`תהי $T:\mathbb{R}^m\to\mathbb{R}^n$ העתקה לינארית. הוכיחו או הפריכו: אם קיים $v\in\mathbb{R}^n$ עבורו קיים $u\in\mathbb{R}^m$ יחיד כך ש-$T(u)=v$, אז $m\le n$.`,
      hint: R`הראו ש-$\ker T=\{0\}$ (אחרת $w+u$ מקור נוסף), ואז משפט המימדים השני.`,
      solution: R`<p><b>הטענה נכונה.</b> $\ker T=\{0\}$: אחרת, אם $0\neq w\in\ker T$, אז $T(w+u)=0+v=v$ – סתירה ליחידות. לכן $T$ חח"ע. בנוסף $\operatorname{Im}T\subseteq\mathbb{R}^n$, ולפי משפט המימדים השני $n\ge\dim\operatorname{Im}T=m-0=m$.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A\in\mathbb{R}^{4\times4}$ בעלת עקבה 0 ודרגה 2 אז $A$ לכסינה.`,
      hint: R`נסו מטריצה משולשית עליונה עם אפסים באלכסון (נילפוטנטית).`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$ – עקבה 0 ודרגה 2. ע"ע יחיד 0 מר"א 4, אבל ר"ג $4-r(A)=2$. לכן לא לכסינה.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'systems', type: 'mc', answer: 'ד',
      text: R`תהי $A\in\mathbb{R}^{5\times5}$, $u,v,w\in\mathbb{R}^5$, ו-$W$ מרחב הפתרונות של $Ax=0$. אז:`,
      options: [
        R`אם $W=\operatorname{span}\{u,v,w\}$ אז $\operatorname{rank}(A)=2$.`,
        R`אם $u,v,w$ הם 3 עמודות בת"ל של $A$ אז $\dim W=2$.`,
        R`אם $\operatorname{rank}(A)=3$ ו-$W=\operatorname{span}\{u,v,w\}$ אז $\{u,v,w\}$ בת"ל.`,
        R`אם $\operatorname{rank}(A)=1$ אז $W\neq\operatorname{span}\{u,v,w\}$.`,
        R`אם $\operatorname{rank}(A)\neq1$ אז $W=\operatorname{span}\{u,v,w\}$.`
      ],
      hint: R`$\dim W=n-r(A)=5-r(A)$. כמה וקטורים לפחות דרושים לפרוש מרחב ממימד $k$?`,
      solution: R`<p>$\dim W=5-r(A)$.<br>
A. לא: אם $W$ נפרש ע"י 3 וקטורים, $\dim W\le3$, כלומר $r(A)\ge2$ – לא בהכרח 2.<br>
B. לא: $r(A)\ge3$ (ייתכנו עוד עמודות בת"ל), כלומר רק $\dim W\le2$.<br>
C. לא: $\dim W=2$, ולכן 3 וקטורים שפורשים אותו – ת"ל בהכרח.<br>
D. נכון: $\dim W=4$, ולא ניתן לפרוש אותו ב-3 וקטורים.<br>
E. לא: למשל $A=0$: $\dim W=5$ ולכן $W\neq\operatorname{span}\{u,v,w\}$.</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'inverse', type: 'mc', answer: 'ד',
      text: R`יהיו $A,B\in\mathbb{R}^{n\times n}$ המקיימות $B^3+AB^2=3I$ ו-$B^2A=-2B^3$. אז:`,
      options: [
        R`$A,B$ לא הפיכות.`,
        R`$A,B$ הפיכות ו-$A^{-1}=6B$.`,
        R`$A,B$ הפיכות ו-$A^{-1}=2B$.`,
        R`$A,B$ הפיכות ו-$A^{-1}=\frac16B^2$.`,
        R`$A,B$ הפיכות ו-$A^{-1}=\frac23B^2$.`
      ],
      hint: R`מהשוויון הראשון: $\tfrac13(B^2+AB)B=I$ ⇒ $B$ הפיכה. אחר כך בודדו את $A$ מהשוויון השני.`,
      solution: R`<p>$(B^2+AB)B=3I$, כלומר $\tfrac13(B^2+AB)B=I$, ולכן $B$ ו-$B^2+AB$ הפיכות ו-$B^{-1}=\tfrac13(B^2+AB)$.
מ-$B^2A=-2B^3$, בכפל ב-$(B^2)^{-1}$ משמאל: $A=-2B$, ולכן $A^{-1}=(-2B)^{-1}$. בנוסף (כפל ב-$B$ מימין) $AB=-2B^2$. לכן:
$$A^{-1}=-\tfrac12B^{-1}=-\tfrac12\cdot\tfrac13(B^2+AB)=-\tfrac16(B^2-2B^2)=\tfrac16B^2$$</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'det', type: 'mc', answer: 'א',
      text: R`נתונות $A,B\in\mathbb{R}^{3\times3}$ כך ש-$\det(A\cdot\operatorname{adj}(B))=1$ ו-$\det(B\cdot\operatorname{adj}(A))=8$. אז $\det(A\cdot B)$ שווה ל:`,
      options: ['2', '4', '8', '16', '1'],
      hint: R`בפתרון הרשמי משתמשים בזהות $|\operatorname{adj}(A)|=|A|^{n-1}$ (כאן $n=3$).`,
      solution: R`<p>$|\operatorname{adj}(A)|=|A|^{n-1}=|A|^2$. מהנתון: $|A||B|^2=1$, ולכן הדטרמיננטות שונות מ-0 ו-$|A|=\frac1{|B|^2}$. בנוסף $|B||A|^2=8$. נציב: $|B|\cdot\frac1{|B|^4}=8$, כלומר $|B|^3=\frac18$, $|B|=\frac12$ (ממשית), ו-$|A|=4$.
$\det(AB)=4\cdot\frac12=2$.</p>
<p><b>תשובה: א' (A).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'complex', type: 'mc', answer: 'ב',
      text: R`נתון אופרטור $T:\mathbb{C}^3\to\mathbb{C}^3$ כך ש-$[T]_E=\begin{pmatrix}1&1&0\\1&z^4&2\\0&z^4-1&z^6+1\end{pmatrix}$, $z\in\mathbb{C}$. נסמן ב-$k$ את מספר הערכים השונים של $z$ עבורם קיים $0\neq v\in\mathbb{C}^3$ כך ש-$T(v)=T(-v)$, וב-$m$ את מכפלתם. אזי:`,
      options: [R`$k=8,\ m=1$`, R`$k=8,\ m=-1$`, R`$k=9,\ m=1$`, R`$k=9,\ m=-1$`, R`$k=10,\ m=1$`],
      hint: R`$T(v)=T(-v)$ עם $v\neq0$ ⇔ $T$ לא חח"ע ⇔ $\det[T]_E=0$. אחר כך – שורשי יחידה מסדר 4 ומסדר 6, בלי כפילויות.`,
      solution: R`<p>$T(v)=T(-v)$ עם $v\neq0$ ⇒ $T$ לא חח"ע ולכן לא הפיך: $\det[T]_E=0$.
$$\begin{vmatrix}1&1&0\\1&z^4&2\\0&z^4-1&z^6+1\end{vmatrix}\underset{R_2-R_1}{=}\begin{vmatrix}1&1&0\\0&z^4-1&2\\0&z^4-1&z^6+1\end{vmatrix}\underset{R_3-R_2}{=}(z^4-1)(z^6-1)$$
$z^4=1$: $\operatorname{cis}0^\circ,90^\circ,180^\circ,270^\circ$. $z^6=1$: $\operatorname{cis}0^\circ,60^\circ,120^\circ,180^\circ,240^\circ,300^\circ$.
ערכים שונים: $0^\circ,60^\circ,90^\circ,120^\circ,180^\circ,240^\circ,270^\circ,300^\circ$ ⇒ $k=8$, ומכפלתם $\operatorname{cis}1260^\circ=\operatorname{cis}180^\circ=-1$.</p>
<p><b>תשובה: ב' (B).</b></p>`
    },
    {
      exam, q: 'שאלה 8', topic: 'lt', type: 'mc', answer: 'ב',
      text: R`נתון אופרטור לינארי $T:\mathbb{R}^3\to\mathbb{R}^3$ כך ש: (i) $(1,1,1)^t,(0,0,1)^t$ הם ו"ע של $T$ השייכים לע"ע $\lambda=-2$; (ii) $(0,1,2)^t\in\ker T$. אז $T(3,2,3)^t$ שווה ל:`,
      options: [R`$(-6,-4,-6)^t$`, R`$(-6,-6,-10)^t$`, R`$(-2,-3,-6)^t$`, R`$(6,6,6)^t$`, R`$(-2,-2,-4)^t$`],
      hint: R`כתבו את $(3,2,3)$ כצירוף לינארי של שלושת הוקטורים הנתונים והשתמשו בלינאריות.`,
      solution: R`<p>$T(1,1,1)=(-2,-2,-2)$, $T(0,0,1)=(0,0,-2)$, $T(0,1,2)=0$.
$(3,2,3)=3(1,1,1)+2(0,0,1)-(0,1,2)$, לכן
$T(3,2,3)=3(-2,-2,-2)+2(0,0,-2)-0=(-6,-6,-10)$.</p>
<p><b>תשובה: ב' (B).</b></p>`
    }
  );
})();

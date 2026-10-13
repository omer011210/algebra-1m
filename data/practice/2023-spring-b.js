/* מועד ב', סמסטר אביב תשפ"ג (18.10.23) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2023B', label: 'אביב תשפ״ג, מועד ב׳', date: '18.10.23', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}_3[x]$ ההעתקה הלינארית
$$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=(a+c-d)+4cx+4cx^2+(a+c-d)x^3$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס לתמונה של $T$, כך שמקדם $x^2$ בכל איבר בבסיס יהיה שווה ל-7.</li>
<li>הוכיחו שאם $x_1=1$ הוא שורש של פולינום $p(x)\in\operatorname{Im}T$ שונה מ-0, אז $x_1=1$ הוא שורש מריבוי בדיוק 2 של הפולינום.</li>
<li>הוכיחו או הפריכו: אם $A\in\ker(T)$ אז $A$ לכסינה.</li>
</ol>`,
      hint: R`ג' – איבר כללי בתמונה $\alpha(1+x^3)+\beta(x+x^2)$. ריבוי שורש: הפולינום והנגזרות עד סדר $k-1$ מתאפסים בנקודה, והנגזרת ה-$k$ לא.`,
      solution: R`<p><b>א.</b> $a+c-d=0,\ 4c=0\Rightarrow a=d,\ c=0$.
$\ker T=\left\{\begin{pmatrix}a&b\\0&a\end{pmatrix}\right\}=\operatorname{span}\left\{\begin{pmatrix}1&0\\0&1\end{pmatrix},\begin{pmatrix}0&1\\0&0\end{pmatrix}\right\}$, $\dim\ker T=2$.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=4-2=2$. $T=a(1+x^3)+c(1+4x+4x^2+x^3)+d(-1-x^3)$, לכן $\operatorname{Im}T=\operatorname{span}\{1+x^3,\ x+x^2\}$.
כדי לקבל מקדם 7 ל-$x^2$ בכל איבר, נבצע פעולות על וקטורי הקואורדינטות: $\begin{pmatrix}1&0&0&1\\0&1&1&0\end{pmatrix}\xrightarrow{7R_2}\begin{pmatrix}1&0&0&1\\0&7&7&0\end{pmatrix}\xrightarrow{R_1+R_2}\begin{pmatrix}1&7&7&1\\0&7&7&0\end{pmatrix}$:
$B_{\operatorname{Im}T}=\{1+7x+7x^2+x^3,\ 7x+7x^2\}$.</p>
<p><b>ג.</b> $p\in\operatorname{Im}T\iff p(x)=\alpha+\beta x+\beta x^2+\alpha x^3$. $p(1)=0\iff2\alpha+2\beta=0\iff\beta=-\alpha$, כלומר $p(x)=\alpha-\alpha x-\alpha x^2+\alpha x^3$.
$p'(x)=-\alpha-2\alpha x+3\alpha x^2$, $p'(1)=0$ – ריבוי לפחות 2. $p''(x)=-2\alpha+6\alpha x$, $p''(1)=4\alpha\neq0$ עבור $p\neq0$. לכן הריבוי בדיוק 2.</p>
<p><b>ד. הטענה לא נכונה.</b> $a=b=1$: $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\in\ker T$, אבל לא לכסינה: ע"ע יחיד 1 מר"א 2 ור"ג $2-\operatorname{rank}\begin{pmatrix}0&-1\\0&0\end{pmatrix}=1$.</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}a&a&-a\\0&2a&-a\\0&3a&-2a\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו לאילו ערכים של $a\in\mathbb{R}$ המטריצה $A$ לכסינה.</li>
</ol>
בסעיפים ב'–ד' נתון $a=1$.
<ol class="parts" start="2">
<li>הוכיחו כי $A$ לכסינה ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>הוכיחו כי $\operatorname{rank}(A^{2023})=\operatorname{trace}(A^{2024})$.</li>
<li>מצאו את $A^k$ לכל $k\in\mathbb{N}$.</li>
</ol>`,
      hint: R`פ"א: $(\lambda-a)^2(\lambda+a)$. הפרידו $a=0$ ו-$a\neq0$. בסעיף ד' – חשבו $D^{2k}$.`,
      solution: R`<p><b>א.</b> $|\lambda I-A|=(\lambda-a)\left[(\lambda-2a)(\lambda+2a)+3a^2\right]=(\lambda-a)^2(\lambda+a)$.
אם $a=0$: $A=0$, לכסינה. אם $a\neq0$: $-a$ מר"א 1 (ר"ג 1); $a$ מר"א 2 ור"ג $3-\operatorname{rank}\begin{pmatrix}0&-a&a\\0&-a&a\\0&3a&-3a\end{pmatrix}=2$. לכן $A$ לכסינה לכל $a\in\mathbb{R}$.</p>
<p><b>ב.</b> $a=1$: $A=\begin{pmatrix}1&1&-1\\0&2&-1\\0&3&-2\end{pmatrix}$, ע"ע $-1$ (ר"א = ר"ג = 1) ו-$1$ (ר"א = ר"ג = 2).
$\lambda=-1$: $a=b,\ c=3b$, בסיס $\{(1,1,3)\}$. $\lambda=1$: $b=c$, בסיס $\{(1,0,0),(0,1,1)\}$.
$P=\begin{pmatrix}1&1&0\\1&0&1\\3&0&1\end{pmatrix}$, $D=\operatorname{diag}(-1,1,1)$.</p>
<p><b>ג.</b> $A^k$ דומה ל-$D^k$, ולמטריצות דומות אותה דרגה ועקבה:
$\operatorname{rank}(A^{2023})=\operatorname{rank}(\operatorname{diag}(-1,1,1))=3$, $\operatorname{trace}(A^{2024})=\operatorname{trace}(\operatorname{diag}(1,1,1))=3$.</p>
<p><b>ד.</b> $A=PDP^{-1}$. לחזקה זוגית $m=2k$: $A^m=PD^{2k}P^{-1}=PIP^{-1}=I$. לחזקה אי-זוגית $m=2k+1$: $A^m=A^{2k}A=A$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'lt', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $T:\mathbb{R}^2\to\mathbb{R}^2$ העתקה לינארית המקיימת $\dim(\operatorname{Im}T)=\dim(\ker T)=1$ אז $\operatorname{Im}T\cap\ker T=\{0\}$.`,
      hint: R`הגדירו $T$ על הבסיס הסטנדרטי כך שאותו וקטור יהיה גם בגרעין וגם בתמונה.`,
      solution: R`<p><b>הטענה לא נכונה.</b> נגדיר $T(1,0)=0$, $T(0,1)=(1,0)$ (קיימת לפי משפט הקיום והיחידות). $(1,0)$ בגרעין וגם בתמונה. התמונה נפרשת ע"י $\{(1,0)\}$ – מימד 1, ולפי משפט המימדים השני גם מימד הגרעין 1. אבל $(1,0)\in\operatorname{Im}T\cap\ker T$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'det', type: 'tf', answer: true,
      text: R`תהיינה $A,B\in\mathbb{R}^{2023\times2023}$. הוכיחו או הפריכו: אם $A^t=-A$ אז לכל $B$, למערכת $(A^2B)x=0$ יש פתרון לא טריוויאלי.`,
      hint: R`הראו ש-$|A|=0$ בעזרת $|A^t|=|A|$ ו-$|kA|=k^n|A|$, ואז דטרמיננטה של מכפלה.`,
      solution: R`<p><b>הטענה נכונה.</b> $|A|=|A^t|=|-A|=(-1)^{2023}|A|=-|A|$, לכן $|A|=0$. אז $|A^2B|=|A|^2|B|=0$ לכל $B$, כלומר $A^2B$ לא הפיכה ולמערכת $(A^2B)x=0$ יש פתרון לא טריוויאלי.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: לכל שתי העתקות לינאריות $T,S:\mathbb{R}^4\to\mathbb{R}^3$ קיים $0\neq v\in\mathbb{R}^4$ כך ש-$T(v)=S(v)$.`,
      hint: R`הסתכלו על ההעתקה $T-S$ ועל משפט המימדים השני.`,
      solution: R`<p><b>הטענה נכונה.</b> $T-S:\mathbb{R}^4\to\mathbb{R}^3$ לינארית, מימד התמונה $\le3$, ולכן $\dim\ker(T-S)\ge4-3=1$. קיים $0\neq v\in\ker(T-S)$: $(T-S)(v)=0$, כלומר $T(v)=S(v)$.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: true,
      text: R`הוכיחו או הפריכו: לכל $A\in\mathbb{R}^{n\times n}$ קיימים אינסוף ערכים של $\alpha\in\mathbb{R}$ המקיימים $\det(A-\alpha I)\neq0$.`,
      hint: R`$\det(A-\alpha I)$ הוא (עד כדי סימן) הפולינום האופייני – פולינום ממעלה $n$. כמה שורשים יש לו לכל היותר?`,
      solution: R`<p><b>הטענה נכונה.</b> $\det(A-\alpha I)$ הוא הפולינום האופייני של $A$ – ממעלה $n$, ולפי המשפט היסודי של האלגברה יש לו לכל היותר $n$ שורשים. לכן לכל שאר (אינסוף) הערכים של $\alpha$ מתקיים $\det(A-\alpha I)\neq0$.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'basis', type: 'mc', answer: 'ה',
      text: R`יהי $V=\mathbb{R}^{2\times2}$ ויהיו
$U=\left\{A\in V\mid A\begin{pmatrix}1\\1\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}\right\}$,
$W=\operatorname{span}\left\{\begin{pmatrix}1&0\\0&1\end{pmatrix},\begin{pmatrix}0&1\\1&0\end{pmatrix},\begin{pmatrix}1&1\\1&\alpha\end{pmatrix}\right\}$. אז:`,
      options: [
        R`קיימים אינסוף ערכים של $\alpha$ כך ש-$U\cap W=\{0\}$.`,
        R`קיימים אינסוף ערכים של $\alpha$ כך ש-$\dim(U\cap W)=2$.`,
        R`קיימים אינסוף ערכים של $\alpha$ כך ש-$\dim U=\dim W$.`,
        R`קיים ערך יחיד של $\alpha$ כך ש-$\dim(U\cap W)=1$.`,
        R`קיימים אינסוף ערכים של $\alpha$ כך ש-$V=U+W$.`
      ],
      hint: R`חשבו $\dim U$, $\dim W$ (תלוי ב-$\alpha$), ואת $\dim(U+W)$ ע"י דירוג איחוד הבסיסים. אחר כך משפט המימדים הראשון.`,
      solution: R`<p>$W$: מדירוג $\begin{pmatrix}1&0&0&1\\0&1&1&0\\1&1&1&\alpha\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&1&0\\0&0&0&\alpha-1\end{pmatrix}$: $\alpha=1\Rightarrow\dim W=2$, $\alpha\neq1\Rightarrow\dim W=3$.<br>
$U$: $a+b=0,\ c+d=0$, $U=\operatorname{sp}\left\{\begin{pmatrix}1&-1\\0&0\end{pmatrix},\begin{pmatrix}0&0\\1&-1\end{pmatrix}\right\}$, $\dim U=2$.<br>
מדירוג איחוד הבסיסים: $\alpha=1\Rightarrow\dim(U+W)=3$, $\dim(U\cap W)=2+2-3=1$; $\alpha\neq1\Rightarrow\dim(U+W)=4$, $\dim(U\cap W)=2+3-4=1$.
מימד החיתוך תמיד 1, ולכל $\alpha\neq1$: $U+W=V$.</p>
<p><b>תשובה: ה' (E).</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'det', type: 'mc', answer: 'ג',
      text: R`יהי $F=\mathbb{R}$ או $F=\mathbb{C}$, ותהיינה $A,B\in F^{n\times n}$ המקיימות $ABA=-B$. אזי:`,
      options: [
        R`אם $n$ זוגי וגם $F=\mathbb{R}$ אז $B$ לא הפיכה.`,
        R`אם $n$ זוגי וגם $B$ לא הפיכה אז גם $A$ לא הפיכה.`,
        R`אם $n$ אי-זוגי וגם $B$ הפיכה אז $F=\mathbb{C}$.`,
        R`אם $n$ זוגי, $F=\mathbb{C}$ ו-$B$ הפיכה אז $A$ לא הפיכה.`,
        R`אם $n$ אי-זוגי ו-$A$ הפיכה אז $B$ הפיכה.`
      ],
      hint: R`קחו דטרמיננטה: $|A|^2|B|=(-1)^n|B|$, כלומר $|B|\left(|A|^2+(-1)^{n+1}\right)=0$.`,
      solution: R`<p>$|A|^2|B|=(-1)^n|B|\Rightarrow|B|\left(|A|^2+(-1)^{n+1}\right)=0$.<br>
A. לא: $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $B=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$ – $ABA=-B$, $n$ זוגי, $F=\mathbb{R}$, $B$ הפיכה.<br>
B. לא: $A=I$, $B=0$.<br>
C. נכון: $n$ אי-זוגי ו-$|B|\neq0$ ⇒ $|A|^2=-1$, כלומר $|A|=\pm i\in F$, ולכן $F=\mathbb{C}$.<br>
D. לא: $|A|^2=1$, $A$ הפיכה.<br>
E. לא: $A=I$, $B=0$.</p>
<p><b>תשובה: ג' (C).</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'complex', type: 'mc', answer: 'ד',
      text: R`תהי $A=\begin{pmatrix}1&1&1\\1&\omega&\omega^2\\1&\omega^2&\omega\end{pmatrix}\in\mathbb{C}^{3\times3}$ כאשר $\omega=\cos\frac{2\pi}3+i\sin\frac{2\pi}3$. אז $\det(A)$ שווה ל:`,
      options: ['1', R`$\omega^2$`, R`$-\frac{\sqrt3}2+\frac12i$`, R`$-3\sqrt3\,i$`, R`$1-\omega^2$`],
      hint: R`$\omega$ שורש יחידה מסדר 3: $\omega^3=1$, ובנוסף $\omega^2=\bar\omega$. השתמשו ב-$\omega-\bar\omega=2i\operatorname{Im}(\omega)$.`,
      solution: R`<p>$\omega^3=1$ ו-$\omega=-\frac12+\frac{\sqrt3}2i$.
$$|A|\underset{C_2-C_1,\ C_3-C_1}{=}\begin{vmatrix}1&0&0\\1&\omega-1&\omega^2-1\\1&\omega^2-1&\omega-1\end{vmatrix}=(\omega-1)^2-(\omega^2-1)^2=3\omega^2-3\omega$$
ומכיוון ש-$\omega^2=\bar\omega$: $3(\bar\omega-\omega)=-3\cdot2i\operatorname{Im}(\omega)=-3\cdot2i\cdot\frac{\sqrt3}2=-3\sqrt3 i$.</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'repr', type: 'mc', answer: 'ד',
      text: R`יהא $B=\{x^3+x,\ x^2+x,\ x,\ x+1\}$ בסיס סדור של $\mathbb{R}_3[x]$, ויהי $T:\mathbb{R}_3[x]\to\mathbb{R}_3[x]$ אופרטור עם
$[T]_B=\begin{pmatrix}1&2&2&2\\0&a&2&4\\0&0&1&b\\0&0&c&6\end{pmatrix}$.
אם $\dim(\operatorname{Im}T)=\dim(\ker T)$ אז $T(x^3+x^2+x+1)$ שווה ל:`,
      options: [R`$7x^3+6x^2+3x+9$`, R`$x^3+2x^2$`, R`$x^3$`, R`$x^3+x$`, R`$7x^3+6x^2+25x+9$`],
      hint: R`$\dim\operatorname{Im}T=\operatorname{rank}([T]_B)=2$. מה צריכים להיות $a,b,c$ כדי שהדרגה תהיה 2? אחר כך $[T]_B[v]_B=[T(v)]_B$.`,
      solution: R`<p>$\dim\operatorname{Im}T=2=\operatorname{rank}([T]_B)$, לכן $a=0$ ושורות 3 ו-4 כפולות של שורה 2: $b=2,\ c=3$.
$[x^3+x^2+x+1]_B=(1,1,-2,1)^t$, ו-
$$[T]_B[v]_B=\begin{pmatrix}1&2&2&2\\0&0&2&4\\0&0&1&2\\0&0&3&6\end{pmatrix}\begin{pmatrix}1\\1\\-2\\1\end{pmatrix}=\begin{pmatrix}1\\0\\0\\0\end{pmatrix}$$
לכן $T(x^3+x^2+x+1)=x^3+x$.</p>
<p><b>תשובה: ד' (D).</b></p>`
    },
    {
      exam, q: 'שאלה 8', topic: 'eigen', type: 'mc', answer: 'ב',
      text: R`תהי $A\in\mathbb{R}^{n\times n}$, ונתון כי למערכת $Ax=-2x$ יש פתרון לא טריוויאלי. אזי:`,
      options: [
        R`$\det(A^4-4A^2)\neq0$`,
        R`למערכת $(A^2+2A)x=0$ יש אינסוף פתרונות.`,
        R`קיימים שני וקטורים בת"ל $u,v\in\mathbb{R}^n$ המקיימים $(A+2I)u=(A+2I)v$.`,
        R`המטריצה $A$ הפיכה.`,
        R`$A$ דומה למטריצה אלכסונית $D$ שבה $(D)_{11}=-2$.`
      ],
      hint: R`$-2$ הוא ע"ע של $A$. אם $\lambda$ ע"ע של $A$ אז $p(\lambda)$ ע"ע של $p(A)$.`,
      solution: R`<p>$-2$ ע"ע של $A$.<br>
A. לא: $(-2)^4-4(-2)^2=0$ ע"ע של $A^4-4A^2$ ⇒ דטרמיננטה 0.<br>
B. נכון: $(-2)^2+2(-2)=0$ ע"ע של $A^2+2A$ ⇒ לא הפיכה ⇒ אינסוף פתרונות.<br>
C. לא: פירושו ר"ג של $-2$ לפחות 2; ב-$A=\begin{pmatrix}-2&0\\0&0\end{pmatrix}$ הר"ג 1.<br>
D. לא: אותה דוגמה – לא הפיכה.<br>
E. לא: $A=\begin{pmatrix}-2&1\\0&-2\end{pmatrix}$ – ר"ג 1, ר"א 2 – לא לכסינה.</p>
<p><b>תשובה: ב' (B).</b></p>`
    }
  );
})();

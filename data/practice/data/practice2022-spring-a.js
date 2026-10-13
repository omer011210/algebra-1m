/* מועד א', סמסטר אביב תשפ"ב (4.7.22) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2022A', label: 'אביב תשפ״ב, מועד א׳', date: '4.7.22', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`יהי $T:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ האופרטור
$$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}a+b-2d&a-b+c\\a+3b+c-4d&a-b\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>הוכיחו כי כל מטריצה $0\neq A\in\ker(T)$ היא לא לכסינה.</li>
<li>מצאו מטריצה מייצגת של $T+3I$ לפי הבסיס הסדור
$B=\left\{\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}1&1\\0&0\end{pmatrix},\begin{pmatrix}1&0\\1&0\end{pmatrix},\begin{pmatrix}1&0\\0&1\end{pmatrix}\right\}$.</li>
<li>הוכיחו או הפריכו: קיימת העתקה לינארית $S:\mathbb{R}^{2\times2}\to\mathbb{R}_3[x]$ כך ש-$S\circ T$ על.</li>
</ol>`,
      hint: R`ג' – המטריצות בגרעין משולשיות עליונות, והע"ע שלהן על האלכסון. ד' – הפעילו $T+3I$ על כל איבר בבסיס וכתבו את התוצאה כצירוף של איברי $B$. ה' – $\operatorname{Im}(S\circ T)$ נקבעת ע"י הפעלת $S$ על $\operatorname{Im}T$.`,
      solution: R`<p><b>א.</b> מדרוג הממ"ל ההומוגנית: $a=d,\ b=d,\ c=0$. לכן $\ker T=\left\{\begin{pmatrix}d&d\\0&d\end{pmatrix}\right\}=\operatorname{span}\left\{\begin{pmatrix}1&1\\0&1\end{pmatrix}\right\}$, מימד 1.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=4-1=3$.
$T\begin{pmatrix}a&b\\c&d\end{pmatrix}=a\begin{pmatrix}1&1\\1&1\end{pmatrix}+b\begin{pmatrix}1&-1\\3&-1\end{pmatrix}+c\begin{pmatrix}0&1\\1&0\end{pmatrix}+d\begin{pmatrix}-2&0\\-4&0\end{pmatrix}$;
מדירוג מקבלים בסיס לתמונה:
$\left\{\begin{pmatrix}1&1\\1&1\end{pmatrix},\begin{pmatrix}0&1\\-1&1\end{pmatrix},\begin{pmatrix}0&0\\2&-1\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> המטריצות בגרעין: $\begin{pmatrix}d&d\\0&d\end{pmatrix}$ – משולשיות עליונות, ולכן $d$ הוא ע"ע יחיד מריבוי אלגברי 2. לכל $d\neq0$: ר"ג $=2-\operatorname{rank}\begin{pmatrix}0&d\\0&0\end{pmatrix}=1$, ולכן לא לכסינות.</p>
<p><b>ד.</b> $H=T+3I$: $H\begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{pmatrix}4a+b-2d&a+2b+c\\a+3b+4c-4d&a-b+3d\end{pmatrix}$.
$H(B_1)=\begin{pmatrix}4&1\\1&1\end{pmatrix}=1B_1+1B_2+1B_3+1B_4$,
$H(B_2)=\begin{pmatrix}5&3\\4&0\end{pmatrix}=-2B_1+3B_2+4B_3+0B_4$,
$H(B_3)=\begin{pmatrix}4&2\\5&1\end{pmatrix}=-4B_1+2B_2+5B_3+1B_4$,
$H(B_4)=\begin{pmatrix}2&1\\-3&4\end{pmatrix}=0B_1+1B_2-3B_3+4B_4$.
$$[T+3I]_B=\begin{pmatrix}1&-2&-4&0\\1&3&2&1\\1&4&5&-3\\1&0&1&4\end{pmatrix}$$</p>
<p><b>ה. הטענה לא נכונה.</b> אם $S\circ T:\mathbb{R}^{2\times2}\to\mathbb{R}_3[x]$ על, לפי משפט המימדים השני $\dim\ker(S\circ T)=4-4=0$. אבל $\begin{pmatrix}1&1\\0&1\end{pmatrix}\in\ker T$ ולכן $S\circ T$ שולחת אותו ל-$S(0)=0$ – סתירה. (נימוק אחר: $\dim\operatorname{Im}T=3$, והתמונה של $S\circ T$ מתקבלת מהפעלת $S$ על $\operatorname{Im}T$ – מימדה לכל היותר 3.)</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}5&-6&-6\\-1&4&2\\3&-6&-4\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני, הע"ע והריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>תהי $B=A-2I$. מצאו את $k\in\mathbb{N}$ הקטן ביותר המקיים $B^{2022}=B^k$.</li>
</ol>`,
      hint: R`ג' – אם $\lambda$ ע"ע של $A$ אז $\lambda-2$ ע"ע של $A-2I$. השתמשו בקיילי-המילטון על $B$.`,
      solution: R`<p><b>א.</b>
$$|\lambda I-A|\underset{C_2-C_3}{=}\begin{vmatrix}\lambda-5&0&6\\1&\lambda-2&-2\\-3&2-\lambda&\lambda+4\end{vmatrix}\underset{R_3+R_2}{=}\begin{vmatrix}\lambda-5&0&6\\1&\lambda-2&-2\\-2&0&\lambda+2\end{vmatrix}=(\lambda-2)\left[(\lambda-5)(\lambda+2)+12\right]=(\lambda-2)^2(\lambda-1)$$
$\lambda_1=2$: ר"א 2, ר"ג 2. $\lambda_2=1$: ר"א 1 ולכן ר"ג 1.</p>
<p><b>ב.</b> $\lambda_1=2$: $x-2y-2z=0$, בסיס $\{(2,1,0),(2,0,1)\}$. $\lambda_2=1$: $x+3y=0,\ 3y+z=0$, בסיס $\{(-3,1,-3)\}$.
לכל ע"ע ר"א = ר"ג ולכן לכסינה:
$P=\begin{pmatrix}2&2&-3\\1&0&1\\0&1&-3\end{pmatrix}$, $D=\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}$.</p>
<p><b>ג.</b> הע"ע של $B=A-2I$ הם $\mu_1=0$ (ר"א 2) ו-$\mu_2=-1$ (ר"א 1), והפ"א של $B$ הוא $\lambda^2(\lambda+1)=\lambda^3+\lambda^2$. לפי קיילי-המילטון $B^3+B^2=0$, כלומר $B^3=-B^2$. נכפול ב-$B$: $B^4=-B^3=B^2$. באותו אופן $B^{2m}=B^2$ לכל חזקה זוגית, ובפרט $B^{2022}=B^2$. לכן $k=2$.</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'span', type: 'tf', answer: false,
      text: R`תהי $A\in\mathbb{R}^{m\times n}$. הוכיחו או הפריכו: אם עמודות $A$ פורשות את $\mathbb{R}^m$ אז שורות $A$ פורשות את $\mathbb{R}^n$.`,
      hint: R`נסו מטריצה $2\times3$.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$: העמודות פורשות את $\mathbb{R}^2$, אבל 2 השורות לא פורשות את $\mathbb{R}^3$ (שנפרש ע"י 3 וקטורים לפחות).</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'det', type: 'tf', answer: true,
      text: R`תהי $A\in\mathbb{R}^{n\times n}$. הוכיחו או הפריכו: אם $A^2+I=0$ אז $n$ זוגי.`,
      hint: R`העבירו אגף וקחו דטרמיננטה: $|A|^2=|-I|$.`,
      solution: R`<p><b>הטענה נכונה.</b> $A^2=-I$, ולכן $|A|^2=|-I|=(-1)^n$. אם $n$ אי-זוגי נקבל $|A|^2=-1$, וזה לא ייתכן כי $A$ ממשית ולכן $|A|$ ממשי. מכאן $n$ זוגי.</p>
<p>הערה: מטריצות כאלה קיימות, למשל $A=\begin{pmatrix}1&2\\-1&-1\end{pmatrix}$ עם $A^2=-I$ (פולינום אופייני $x^2+1$ וקיילי-המילטון).</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`תהיינה $T,S:\mathbb{R}^5\to\mathbb{R}^2$ העתקות לינאריות. הוכיחו או הפריכו: קיים $0\neq v\in\mathbb{R}^5$ כך ש-$T(v)=S(v)=0$.`,
      hint: R`משפט המימדים השני נותן $\dim\ker\ge3$ לכל אחת. אחר כך – משפט המימדים הראשון על $\ker T+\ker S$.`,
      solution: R`<p><b>הטענה נכונה.</b> מימד התמונה של כל אחת לכל היותר 2, ולכן לפי משפט המימדים השני מימד הגרעין של כל אחת לפחות 3. לפי משפט המימדים הראשון:
$$\underbrace{\dim(\ker T+\ker S)}_{\le5}=\underbrace{\dim\ker T+\dim\ker S}_{\ge6}-\dim(\ker T\cap\ker S)$$
ולכן $\dim(\ker T\cap\ker S)\ge1$, וקיים $v\neq0$ בחיתוך: $T(v)=S(v)=0$.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A,B\in\mathbb{R}^{2\times2}$ מקיימות $\det(A)=\det(B)=\operatorname{trace}(A)=\operatorname{trace}(B)=4$ אז $A$ ו-$B$ דומות.`,
      hint: R`שוויון עקבה ודטרמיננטה הוא תנאי הכרחי אבל לא מספיק לדמיון. השוו אלכסונית ללא-לכסינה.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}2&0\\0&2\end{pmatrix}$, $B=\begin{pmatrix}2&1\\0&2\end{pmatrix}$ מקיימות את הנתונים, אבל $A$ לכסינה ו-$B$ לא: לע"ע 2 ר"א 2 ור"ג $2-\operatorname{rank}\begin{pmatrix}0&1\\0&0\end{pmatrix}=1$. לכן אינן דומות.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ב',
      text: R`יהיו $z_1,\dots,z_k$ כל הפתרונות השונים מ-0 של המשוואה $(\sqrt3+i)z^3=2i\cdot\bar z$, ונסמן $w=z_1z_2\cdots z_k$. אזי:`,
      options: [R`$k=4,\ 2w=-\sqrt3-i$`, R`$k=4,\ 2w=-1-\sqrt3 i$`, R`$k=4,\ 2w=\sqrt3+i$`, R`$k=3,\ 2w=1-\sqrt3 i$`, R`$k=3,\ 2w=\sqrt3-i$`],
      hint: R`עברו להצגה קוטבית $z=r\operatorname{cis}\theta$, וזכרו $\bar z=r\operatorname{cis}(-\theta)$. השוו מודולים וארגומנטים.`,
      solution: R`<p>$z^3=\dfrac{2i}{\sqrt3+i}\bar z$: $r^3\operatorname{cis}3\theta=\dfrac{2\operatorname{cis}90^\circ}{2\operatorname{cis}30^\circ}r\operatorname{cis}(-\theta)=r\operatorname{cis}(60^\circ-\theta)$.<br>
$r^3=r\Rightarrow r=0,1$; $3\theta=60^\circ-\theta+360^\circ k\Rightarrow\theta=15^\circ+90^\circ k$, $k=0,1,2,3$.<br>
לכן $k=4$ פתרונות שונים מ-0, ו-$w=\operatorname{cis}(15^\circ+105^\circ+195^\circ+285^\circ)=\operatorname{cis}240^\circ=-\tfrac12-\tfrac{\sqrt3}{2}i$, כלומר $2w=-1-\sqrt3 i$.</p>
<p><b>תשובה: ב'.</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'span', type: 'mc', answer: 'ב',
      text: R`יהיו $v_1,v_2,v_3,v_4,w$ וקטורים ב-$\mathbb{R}^n$, ונסתכל על המשוואה $w=x_1v_1+x_2v_2+x_3v_3+x_4v_4$ ($x_i\in\mathbb{R}$). אזי:`,
      options: [
        R`אם למערכת אין פתרון, אז $\{v_1,v_2,v_3,v_4,w\}$ בלתי תלויה לינארית.`,
        R`אם למערכת יש פתרון יחיד, אז $\dim(\operatorname{sp}\{v_1,v_2,v_3,v_4\})=4$.`,
        R`אם למערכת יש פתרון, אז $\operatorname{sp}\{v_1,v_2,v_3,v_4\}=\operatorname{sp}\{v_1,v_2,v_3,w\}$.`,
        R`אם למערכת יש אינסוף פתרונות, אז $\operatorname{sp}\{v_1,v_2,v_3,v_4\}=\operatorname{sp}\{v_1,v_2,v_3\}$.`,
        R`אם למערכת יש אינסוף פתרונות, אז $\dim(\operatorname{sp}\{v_1,v_2,v_3,v_4\})=3$.`
      ],
      hint: R`משפט 9: $w$ ניתן לכתיבה כק"ל יחיד של $v_1,\dots,v_k$ אם"ם הם בת"ל.`,
      solution: R`<p>א. לא – אולי הקבוצה תלויה, רק ש-$w$ אינו ק"ל של $v_1,\dots,v_4$.<br>
ב. נכון – פתרון יחיד ⇒ $v_1,\dots,v_4$ בת"ל ⇒ מימד הפרוש 4.<br>
ג. לא – אם $x_4=0$ בפתרון, לא בהכרח ניתן להחליף את $v_4$ ב-$w$.<br>
ד. לא – $v_1,\dots,v_4$ ת"ל, אבל לא בהכרח $v_4$ הוא הוקטור המיותר.<br>
ה. לא – הם ת"ל, אבל המימד יכול להיות קטן מ-3.</p>
<p><b>תשובה: ב'.</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'det', type: 'mc', answer: 'א',
      text: R`יהיו $A,B\in\mathbb{R}^{3\times3}$ הפיכות, המקיימות $AB=|A|\cdot I$ וגם $\left|(2A)^2\cdot(A^{-1})^tB\right|=16$. אז $|A|$ שווה ל:`,
      options: [R`$\sqrt[3]{\tfrac14}$`, R`$\sqrt[3]{4}$`, '4', R`$\tfrac14$`, R`$\left(\tfrac14\right)^3$`],
      hint: R`$|kA|=k^n|A|$, $|A^{-1}|=|A|^{-1}$, $|A^t|=|A|$. מהשוויון $AB=|A|I$ קחו דטרמיננטה.`,
      solution: R`$$16=|(2A)^2|\,|(A^{-1})^t|\,|B|=4^3|A|^2\cdot\frac{|B|}{|A|}=4^3|A||B|\ \Rightarrow\ |A||B|=\tfrac14$$
$$AB=|A|I\Rightarrow|A||B|=|A|^3\Rightarrow|B|=|A|^2\ \ (|A|\neq0)$$
<p>לכן $|A|^3=\tfrac14$, $|A|=\sqrt[3]{\tfrac14}$. <b>תשובה: א'.</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'repr', type: 'mc', answer: 'ה',
      text: R`יהי $V=\mathbb{R}_2[x]$ ו-$B=\{1,\ 1+x,\ (1-x)^2\}$ בסיס סדור. יהי $T:V\to V$ אופרטור לינארי המוגדר ע"י
$[T]_B=\begin{pmatrix}1&1&2\\2&1&-1\\3&2&2\end{pmatrix}$.
יהי $p(x)=a+bx+cx^2$ המקיים $T(a+bx+cx^2)=7-2x+3x^2$. אז $p(1)$ שווה ל:`,
      options: ['7', '8', '2', '1', '3'],
      hint: R`$[T]_B[v]_B=[T(v)]_B$. מצאו את $[7-2x+3x^2]_B$ ופתרו את הממ"ל.`,
      solution: R`<p>$7-2x+3x^2=0\cdot1+4(1+x)+3(1-2x+x^2)$, לכן $[T(v)]_B=(0,4,3)^t$. פותרים $[T]_B\,x=(0,4,3)^t$ ומקבלים $[v]_B=(1,1,-1)^t$. לכן
$p(x)=1+(1+x)-(1-2x+x^2)=1+3x-x^2$ ו-$p(1)=3$.</p>
<p><b>תשובה: ה'.</b></p>`
    },
    {
      exam, q: 'שאלה 8', topic: 'eigen', type: 'mc', answer: 'ד',
      text: R`תהי $A=\begin{pmatrix}\alpha&\alpha^2-1&\alpha^2-1\\0&1&1\\0&0&\alpha\end{pmatrix}$ כאשר $\alpha\in\mathbb{R}$. אזי:`,
      options: [
        R`$A$ לא לכסינה מעל $\mathbb{R}$ לכל $\alpha$.`,
        R`$A$ לכסינה מעל $\mathbb{R}$ לכל $\alpha$.`,
        R`קיימים בדיוק 3 ערכים שונים של $\alpha$ עבורם $A$ לכסינה מעל $\mathbb{R}$.`,
        R`קיימים בדיוק 2 ערכים שונים של $\alpha$ עבורם $A$ לכסינה מעל $\mathbb{R}$.`,
        R`קיים בדיוק ערך אחד של $\alpha$ עבורו $A$ לכסינה מעל $\mathbb{R}$.`
      ],
      hint: R`משולשית – הע"ע הם $\alpha,1,\alpha$. הפרידו למקרים $\alpha=1$ ו-$\alpha\neq1$, ובדקו ר"ג של $\alpha$ דרך $\operatorname{rank}(A-\alpha I)$.`,
      solution: R`<p>הע"ע: $1$ ו-$\alpha$. אם $\alpha=1$: ע"ע 1 מר"א 3, ור"ג $=3-\operatorname{rank}\begin{pmatrix}0&0&0\\0&0&1\\0&0&0\end{pmatrix}=2$ – לא לכסינה.<br>
אם $\alpha\neq1$: 1 מר"א 1 (ר"ג 1), $\alpha$ מר"א 2. צריך $\operatorname{rank}(A-\alpha I)=1$:
$$\begin{pmatrix}0&\alpha^2-1&\alpha^2-1\\0&1-\alpha&1\\0&0&0\end{pmatrix}\to\begin{pmatrix}0&1-\alpha&1\\0&0&\alpha^2+\alpha\\0&0&0\end{pmatrix}$$
הדרגה 1 אם"ם $\alpha^2+\alpha=0$, כלומר $\alpha=0,-1$. שני ערכים.</p>
<p><b>תשובה: ד'.</b></p>`
    }
  );
})();

/* מועד א', סמסטר אביב תשפ"א (5.7.21) – אלגברה 1/מ, 104016 */
(function () {
  const exam = { id: '2021A', label: 'אביב תשפ״א, מועד א׳', date: '5.7.21', course: '104016' };
  const R = String.raw;
  window.PRACTICE = window.PRACTICE || [];
  window.PRACTICE.push(
    {
      exam, q: 'שאלה 1', topic: 'lt', type: 'open',
      text: R`תהי $T:\mathbb{R}_3[x]\to\mathbb{R}^{2\times2}$ העתקה לינארית המוגדרת ע"י
$$T(a+bx+cx^2+dx^3)=\begin{pmatrix}a+b+c+d & -a+c+2d\\ b+2c+3d & 3a+3b+3c+3d\end{pmatrix}$$
<ol class="parts">
<li>מצאו בסיס ומימד לגרעין של $T$.</li>
<li>מצאו בסיס ומימד לתמונה של $T$.</li>
<li>מצאו מטריצה בתמונה של $T$ שהיא בעלת דטרמיננטה השווה ל-27.</li>
<li>תהי $S:\mathbb{R}^{2\times2}\to\mathbb{R}^{2\times2}$ ההעתקה הלינארית $S(A)=A-A^t$. הוכיחו כי כל מטריצה שונה מ-0 ב-$\operatorname{Im}(S\circ T)$ היא הפיכה.</li>
<li>מצאו מטריצה מייצגת של $2S+3I$ לפי הבסיס הסטנדרטי $E$ של $\mathbb{R}^{2\times2}$ ($I$ העתקת הזהות).</li>
</ol>`,
      hint: R`גרעין: משווים את $T(p)$ למטריצת האפס ופותרים ממ"ל הומוגנית. תמונה: משפט המימדים $\dim V=\dim\ker T+\dim\operatorname{Im}T$, ופורשים את התמונה ע"י פירוק איבר כללי. בסעיף ד' – שימו לב ש-$A-A^t$ תמיד אנטי-סימטרית.`,
      solution: R`<p><b>א.</b> מקבלים ממ"ל הומוגנית ומדרגים:
$$\begin{pmatrix}1&1&1&1\\-1&0&1&2\\0&1&2&3\\3&3&3&3\end{pmatrix}\to\begin{pmatrix}1&0&-1&-2\\0&1&2&3\\0&0&0&0\\0&0&0&0\end{pmatrix},\quad n-r=4-2=2$$
$(a,b,c,d)=(c+2d,-2c-3d,c,d)=c(1,-2,1,0)+d(2,-3,0,1)$, ולכן
$B_{\ker T}=\{1-2x+x^2,\ 2-3x+x^3\}$, $\dim\ker T=2$.</p>
<p><b>ב.</b> $\dim\operatorname{Im}T=\dim V-\dim\ker T=4-2=2$.
$$T(a+bx+cx^2+dx^3)=a\begin{pmatrix}1&-1\\0&3\end{pmatrix}+b\begin{pmatrix}1&0\\1&3\end{pmatrix}+c\begin{pmatrix}1&1\\2&3\end{pmatrix}+d\begin{pmatrix}1&2\\3&3\end{pmatrix}$$
קיבלנו קבוצה פורשת; המימד 2, לכן שתי מטריצות בת"ל מהן הן בסיס, למשל
$B_{\operatorname{Im}T}=\left\{\begin{pmatrix}1&-1\\0&3\end{pmatrix},\begin{pmatrix}1&0\\1&3\end{pmatrix}\right\}$.</p>
<p><b>ג.</b> למטריצות בבסיס דטרמיננטה 3. נכפיל את השמאלית ב-3: $\begin{pmatrix}3&-3\\0&9\end{pmatrix}$ נמצאת בתמונה והדטרמיננטה שלה 27.</p>
<p><b>ד.</b> $S(A)=A-A^t$ אנטי-סימטרית לכל $A$, ולכן מהצורה $\begin{pmatrix}0&x\\-x&0\end{pmatrix}$ שהדטרמיננטה שלה $x^2$. היא שונה מ-0 אם"ם $x\neq0$ אם"ם היא הפיכה.
(דרך ספציפית: איבר כללי בתמונה של $T$ הוא $\begin{pmatrix}a+b&-a\\b&3a+3b\end{pmatrix}$ ו-$S$ שולחת אותו ל-$\begin{pmatrix}0&-a-b\\a+b&0\end{pmatrix}$ שהדטרמיננטה שלו $(a+b)^2$.)</p>
<p><b>ה.</b> $(2S+3I)(A)=2(A-A^t)+3A=5A-2A^t=\begin{pmatrix}3a&5b-2c\\5c-2b&3d\end{pmatrix}$, ולכן
$$[2S+3I]_E=\begin{pmatrix}3&0&0&0\\0&5&-2&0\\0&-2&5&0\\0&0&0&3\end{pmatrix}$$</p>`
    },
    {
      exam, q: 'שאלה 2', topic: 'eigen', type: 'open',
      text: R`תהי $A=\begin{pmatrix}2&1&2\\2&3&4\\-1&-1&-1\end{pmatrix}\in\mathbb{R}^{3\times3}$.
<ol class="parts">
<li>מצאו את הפולינום האופייני של $A$, את הערכים העצמיים ואת הריבוי האלגברי והגיאומטרי של כל ע"ע.</li>
<li>הוכיחו כי $A$ לכסינה מעל $\mathbb{R}$ ומצאו $P$ הפיכה ו-$D$ אלכסונית כך ש-$P^{-1}AP=D$.</li>
<li>האם קיימים $x,y,z,w\in\mathbb{R}$ כך ש-$C=\begin{pmatrix}x&y&z\\0&w&w\\0&0&x\end{pmatrix}$ דומה ל-$A$? אם כן – מצאו את התנאים.</li>
</ol>`,
      hint: R`חשבו $|\lambda I-A|$ – פעולת עמודות $C_1\to C_1-C_2$ חוסכת עבודה. לכסינות: ר"א = ר"ג לכל ע"ע. בסעיף ג' – למטריצות דומות אותם ע"ע (ובמטריצה משולשית הע"ע על האלכסון), ו-$C$ חייבת להיות לכסינה.`,
      solution: R`<p><b>א.</b>
$$|\lambda I-A|\underset{C_1\to C_1-C_2}{=}\begin{vmatrix}\lambda-1&-1&-2\\1-\lambda&\lambda-3&-4\\0&1&\lambda+1\end{vmatrix}\underset{R_2\to R_2+R_1}{=}\begin{vmatrix}\lambda-1&-1&-2\\0&\lambda-4&-6\\0&1&\lambda+1\end{vmatrix}=(\lambda-1)^2(\lambda-2)$$
ע"ע: $\lambda_1=1$ (ר"א 2), $\lambda_2=2$ (ר"א 1).</p>
<p><b>ב.</b> $\lambda_1=1$: $(I-A)x=0 \Rightarrow x+y+2z=0$, בסיס $\{(-1,1,0),(-2,0,1)\}$, ר"ג 2.<br>
$\lambda_2=2$: $(2I-A)x=0\Rightarrow x+z=0,\ y+2z=0$, בסיס $\{(1,-2,-1)\}$, ר"ג 1.<br>
לכל ע"ע ר"א = ר"ג, לכן $A$ לכסינה:
$$P=\begin{pmatrix}-1&-2&1\\1&0&-2\\0&1&-1\end{pmatrix},\quad D=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$$</p>
<p><b>ג.</b> $C$ משולשית עליונה ולכן הע"ע שלה הם איברי האלכסון $x,w,x$. למטריצות דומות אותם ע"ע, לכן $x=1,\ w=2$.
כדי ש-$C$ תהיה דומה ל-$A$ (שהיא לכסינה) היא צריכה להיות לכסינה, כלומר ר"ג של 1 יהיה 2: $3-r(C-I)=2$, כלומר $r(C-I)=1$:
$$C-I=\begin{pmatrix}0&y&z\\0&1&2\\0&0&0\end{pmatrix}\to\begin{pmatrix}0&1&2\\0&0&z-2y\\0&0&0\end{pmatrix}$$
לכן צריך $z=2y$. לסיכום: $C$ דומה ל-$A$ אם"ם $x=1,\ w=2,\ z=2y$ ($y\in\mathbb{R}$).</p>`
    },
    {
      exam, q: 'שאלה 3א', topic: 'det', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A\in\mathbb{C}^{2\times2}$ כך ש-$\det(A)\gt 0$ אז $\operatorname{trace}(A)\in\mathbb{R}$.`,
      hint: R`נסו מטריצה אלכסונית עם איברים מדומים טהורים שמכפלתם חיובית.`,
      solution: R`<p><b>הטענה לא נכונה.</b> נבחר $A=\begin{pmatrix}i&0\\0&-2i\end{pmatrix}$. אז $\det(A)=i\cdot(-2i)=2\gt 0$ אבל $\operatorname{trace}(A)=-i\notin\mathbb{R}$.</p>`
    },
    {
      exam, q: 'שאלה 3ב', topic: 'lt', type: 'tf', answer: true,
      text: R`יהי $V$ מרחב וקטורי מעל $\mathbb{R}$ ויהי $T:V\to V$ אופרטור לינארי המקיים $T^2=0$. הוכיחו או הפריכו: אם $v\notin\ker T$ אז הקבוצה $\{v,T(v)\}$ בלתי תלויה לינארית.`,
      hint: R`הניחו $\alpha v+\beta T(v)=0$ והפעילו $T$ על שני האגפים.`,
      solution: R`<p><b>הטענה נכונה.</b> $v\notin\ker T$ ולכן $v\neq0$ ו-$T(v)\neq0$. יהיו $\alpha,\beta$ כך ש-$\alpha v+\beta T(v)=0$. נפעיל $T$: $\alpha T(v)+\beta T^2(v)=0$, ומכיוון ש-$T^2=0$ נקבל $\alpha T(v)=0$, ולכן $\alpha=0$. נציב: $\beta T(v)=0$ ולכן $\beta=0$. כל הסקלרים אפס, ולכן $\{v,T(v)\}$ בת"ל.</p>
<p>אפשרות אחרת: אם הקבוצה ת"ל, לפי משפט שני וקטורים שונים מ-0, $T(v)=\alpha v$ עם $\alpha\neq0$. אז $0=T^2(v)=\alpha T(v)$, כלומר $T(v)=0$ – סתירה.</p>`
    },
    {
      exam, q: 'שאלה 3ג', topic: 'lt', type: 'tf', answer: true,
      text: R`תהי $M\in\mathbb{R}^{3\times3}$ ויהי $T:\mathbb{R}^{3\times3}\to\mathbb{R}^{3\times3}$ האופרטור $T(A)=MA$. הוכיחו או הפריכו: $T$ הפיך אם"ם $M$ הפיכה.`,
      hint: R`$T$ אופרטור, לכן מספיק לבדוק חח"ע (גרעין). אם $M$ לא הפיכה – ל-$Mx=0$ יש פתרון לא טריוויאלי; בנו ממנו מטריצה בגרעין.`,
      solution: R`<p><b>הטענה נכונה.</b> $T$ אופרטור, ולכן מספיק להוכיח חח"ע.</p>
<p>כיוון ראשון: נניח $T$ הפיך. אם $M$ לא הפיכה, למערכת $Mx=0$ יש פתרון לא טריוויאלי $v$. המטריצה $A$ שכל עמודותיה הן $v$ מקיימת $A\neq0$ ו-$T(A)=MA=0$, כלומר $\ker T\neq\{0\}$ – סתירה.</p>
<p>כיוון שני: נניח $M$ הפיכה, ותהי $A\in\ker T$, כלומר $MA=0$. נכפול משמאל ב-$M^{-1}$ ונקבל $A=0$. לכן $\ker T=\{0\}$, $T$ חח"ע, ומכיוון שהוא אופרטור – גם על, ולכן הפיך.</p>`
    },
    {
      exam, q: 'שאלה 3ד', topic: 'eigen', type: 'tf', answer: false,
      text: R`הוכיחו או הפריכו: אם $A,B\in\mathbb{R}^{n\times n}$ לכסינות מעל $\mathbb{R}$ אז גם $A+B$ לכסינה מעל $\mathbb{R}$.`,
      hint: R`חפשו שתי מטריצות $2\times2$ משולשיות עם שני ע"ע שונים, שסכומן משולשית עם ע"ע יחיד שאינה סקלרית.`,
      solution: R`<p><b>הטענה לא נכונה.</b> $A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$, $B=\begin{pmatrix}0&0\\0&1\end{pmatrix}$ – שתיהן לכסינות (מסדר 2 עם 2 ע"ע שונים). אבל $A+B=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ לא לכסינה: 1 הוא ע"ע יחיד והמטריצה אינה סקלרית.</p>`
    },
    {
      exam, q: 'שאלה 4', topic: 'complex', type: 'mc', answer: 'ד',
      text: R`יהי $z\neq1$ שורש יחידה מסדר 3, ויהי $w=(z+1)^2(2z^2+z+1)$. אזי:`,
      options: [R`$w=-1$`, R`$w=1+z$`, R`$w$ מדומה טהור`, R`$w=1$`, R`$w=16$`],
      hint: R`לפי וייטה, סכום שורשי היחידה מסדר 3 הוא 0, כלומר $z^2+z+1=0$. השתמשו גם ב-$z^3=1$.`,
      solution: R`<p>$z^3=1$ ולפי וייטה $z^2+z+1=0$. לכן
$$w=(z+1)^2(z^2+\underbrace{z^2+z+1}_{=0})=z^2(z^2+2z+1)=z^4+2z^3+z^2=z+2+z^2=1+\underbrace{(1+z+z^2)}_{=0}=1$$
<b>תשובה: ד'.</b></p>`
    },
    {
      exam, q: 'שאלה 5', topic: 'basis', type: 'mc', answer: 'ג',
      text: R`יהי $V=\mathbb{R}^{2\times2}$ ויהי $W=\{A\in V\mid \operatorname{trace}(A)=0\}$. אזי:`,
      options: [
        'קיים בסיס של $W$ המורכב מ-2 מטריצות סימטריות ו-2 מטריצות אנטי-סימטריות.',
        'קיים בסיס של $W$ המורכב ממטריצה סימטרית אחת ו-2 מטריצות אנטי-סימטריות.',
        'קיים בסיס של $W$ המורכב ממטריצה סימטרית אחת ומטריצה אנטי-סימטרית אחת.',
        'כל בסיס של $W$ מכיל לפחות מטריצה סימטרית אחת.',
        'כל בסיס של $W$ מכיל לפחות מטריצה אנטי-סימטרית אחת.'
      ],
      hint: R`מה המימד של $W$? כמה מטריצות אנטי-סימטריות בת"ל יש בכלל מסדר 2?`,
      solution: R`<p>$\dim W=3$, לכן בכל בסיס יש בדיוק 3 מטריצות בת"ל.</p>
<p>א. לא – 4 מטריצות ב-$W$ בטוח ת"ל. ב. לא – 2 מטריצות אנטי-סימטריות מסדר 2 תלויות. ג. נכון:
$\left\{\begin{pmatrix}1&0\\0&-1\end{pmatrix},\begin{pmatrix}0&1\\-1&0\end{pmatrix},\begin{pmatrix}0&0\\1&0\end{pmatrix}\right\}$ – בסיס; הראשונה סימטרית, השנייה אנטי-סימטרית והשלישית אף אחת מהן.
ד. לא – $\left\{\begin{pmatrix}1&1\\-1&-1\end{pmatrix},\begin{pmatrix}0&1\\-1&0\end{pmatrix},\begin{pmatrix}0&0\\1&0\end{pmatrix}\right\}$ בסיס בלי סימטרית. ה. לא – $\left\{\begin{pmatrix}1&0\\0&-1\end{pmatrix},\begin{pmatrix}1&1\\-1&-1\end{pmatrix},\begin{pmatrix}0&0\\1&0\end{pmatrix}\right\}$ בסיס בלי אנטי-סימטרית.</p>
<p><b>תשובה: ג'.</b></p>`
    },
    {
      exam, q: 'שאלה 6', topic: 'span', type: 'mc', answer: 'ה',
      text: R`יהי $V$ מרחב וקטורי מעל שדה $F$, ויהיו $A,B$ שתי תתי-קבוצות לא ריקות של וקטורים ב-$V$. אזי:`,
      options: [
        R`אם $A\cap B=\emptyset$ אזי $\operatorname{span}\{A\}\cap\operatorname{span}\{B\}=\{0\}$.`,
        R`אם $A\cap B=\emptyset$ אזי $V=\operatorname{span}\{A\}\oplus\operatorname{span}\{B\}$.`,
        R`אם $A\subset\operatorname{span}\{B\}$ וגם $B\subset\operatorname{span}\{A\}$ אזי $A=B$.`,
        R`אם $A$ ו-$B$ בלתי תלויות לינארית אז $\operatorname{span}\{A\cup B\}=\operatorname{span}\{A\}\cup\operatorname{span}\{B\}$.`,
        R`אם $A\subset B$ אז $\operatorname{span}\{A\cup B\}=\operatorname{span}\{A\}\cup\operatorname{span}\{B\}$.`
      ],
      hint: R`נסו דוגמאות קטנות ב-$\mathbb{R}^2$, למשל $A=\{(1,0)\}$, $B=\{(2,0)\}$. זכרו שאיחוד תמ"וים הוא בדרך כלל לא תמ"ו.`,
      solution: R`<p>א–ג. לא נכון: $A=\{(1,0)\}$, $B=\{(2,0)\}$ – $A\cap B=\emptyset$ אבל $\operatorname{span}\{A\}=\operatorname{span}\{B\}\neq\{0\}$.
ד. לא נכון: $A=\{(1,0)\}$, $B=\{(0,1)\}$ – $\operatorname{span}\{A\cup B\}=\mathbb{R}^2$ אבל איחוד הצירים אינו $\mathbb{R}^2$.
ה. נכון: אם $A\subset B$ אז $\operatorname{span}\{A\}\subseteq\operatorname{span}\{B\}$ ולכן $\operatorname{span}\{A\cup B\}=\operatorname{span}\{B\}=\operatorname{span}\{A\}\cup\operatorname{span}\{B\}$.</p>
<p><b>תשובה: ה'.</b></p>`
    },
    {
      exam, q: 'שאלה 7', topic: 'repr', type: 'mc', answer: 'א',
      text: R`יהי $V$ מרחב וקטורי מעל $\mathbb{R}$ ו-$B=\{v_1,v_2,v_3\}$ בסיס של $V$. יהי $T:V\to V$ האופרטור הלינארי המוגדר ע"י
$T(v_1)=v_1-v_2,\ T(v_2)=v_1-v_3,\ T(v_3)=v_2+v_3$.
יהי $C=\{2v_1+v_2,\ v_1+v_2,\ v_3\}$. סכום כל האיברים בשורה הראשונה של $[T]_C$ הוא:`,
      options: ['7', '−3', '2', '−1', '3'],
      hint: R`בנו את $[T]_B$ ואת מטריצת המעבר מ-$B$ ל-$C$, והשתמשו ב-$[T]_C=P^{-1}[T]_BP$.`,
      solution: R`$$[T]_B=\begin{pmatrix}1&1&0\\-1&0&1\\0&-1&1\end{pmatrix},\quad P_{B\to C}=\begin{pmatrix}2&1&0\\1&1&0\\0&0&1\end{pmatrix},\quad P^{-1}=\begin{pmatrix}1&-1&0\\-1&2&0\\0&0&1\end{pmatrix}$$
$$[T]_C=P^{-1}[T]_BP=\begin{pmatrix}5&3&-1\\-7&-4&2\\-1&-1&1\end{pmatrix}$$
<p>סכום השורה הראשונה: $5+3-1=7$. <b>תשובה: א'.</b></p>`
    },
    {
      exam, q: 'שאלה 8', topic: 'eigen', type: 'mc', answer: 'ד',
      text: R`תהי $A=\begin{pmatrix}\alpha&2\\-2&0\end{pmatrix}$ כאשר $\alpha\in\mathbb{R}$ פרמטר. אזי:`,
      options: [
        R`$A$ לא לכסינה מעל $\mathbb{C}$ לכל $\alpha$.`,
        R`$A$ לכסינה מעל $\mathbb{C}$ לכל $\alpha$.`,
        R`אם $A$ לכסינה מעל $\mathbb{C}$ אז $\alpha\gt 0$.`,
        R`קיימים בדיוק 2 ערכים שונים של $\alpha$ עבורם $A$ לא לכסינה מעל $\mathbb{C}$.`,
        R`קיים בדיוק ערך אחד של $\alpha$ עבורו $A$ לכסינה מעל $\mathbb{C}$.`
      ],
      hint: R`פולינום אופייני $\lambda^2-\alpha\lambda+4$. מתי יש לו שורש כפול (דיסקרימיננטה 0)? במקרה זה – האם $A$ סקלרית?`,
      solution: R`<p>הפולינום האופייני: $\lambda^2-\alpha\lambda+4$. אם יש שני שורשים שונים (ממשיים או מרוכבים) – $A$ לכסינה מעל $\mathbb{C}$. המקרה היחיד שבו ייתכן שלא: ע"ע יחיד, כלומר $\Delta=\alpha^2-16=0$, $\alpha=\pm4$. אז $(\lambda\pm2)^2$ – ע"ע יחיד מריבוי אלגברי 2 וריבוי גיאומטרי 1 (המטריצה אינה סקלרית), ולכן לא לכסינה.</p>
<p><b>תשובה: ד'.</b></p>`
    }
  );
})();

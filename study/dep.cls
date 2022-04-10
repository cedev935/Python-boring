\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{neterdeps}[2022/04/08 NeterOster Maths Dependency]

\LoadClass{ctexart}

\RequirePackage{xcolor}
\RequirePackage{mathtools}
\RequirePackage{amsfonts}
\RequirePackage{amssymb}
\RequirePackage{titlesec}

\renewcommand*\maketitle{
    \begin{flushleft}
        \bfseries
        {\LARGE \@title \par}
        \vspace{-1em}
    \end{flushleft}
}

\titleformat{\section}{\flushleft\bfseries\Large}{\thesection}{1em}{}


\def\eps{\varepsilon}
\def\N+{\mathbb{N}^+}
\def\d{\mathrm{d}}

\newcommand{\red}[1]{{\color{red} #1}}
\newcommand{\blue}[1]{{\color{blue} #1}}
\newcommand{\abs}[1]{\left| #1 \right|}

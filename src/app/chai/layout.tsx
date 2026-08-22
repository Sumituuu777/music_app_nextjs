export default function RootLayout({ children }: LayoutProps<"/">) {
  return (<>
      <h1>Inner layout item</h1>
      <body className="min-h-full flex flex-col">{children}</body>
  </>
  );
}

import Link from "next/link";

export default function SearchLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
        <>
          <h1>Hakuheader</h1>
          {children}
        </>
        
    )
  }

export default function ListItem({ children }: { children: React.ReactNode }) {
    return(
          <li className="hover:text-primary transition-colors cursor-pointer">
    {children}
  </li>
    )
}
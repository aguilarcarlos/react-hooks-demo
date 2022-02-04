import { ThemeProvider, useTheme } from "../context/ThemeContext";

export function ThemedButton() {
  const { foreground, background } = useTheme();
  return <button style={{ backgroundColor: background, color: foreground }}>Themed Button</button>
}

export default function UseContext() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  )
}

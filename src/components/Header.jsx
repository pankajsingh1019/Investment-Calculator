import logo from "../assets/investment-calculator-logo.png"; //Always use this approach to use image path in react

export default function Header() {
  return (
    <header id="header">
        <img src={logo} alt="Money bag img" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default function Loading() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 100 100">
  <rect x="0" y="50" width="10" height="100" fill="blue">
    <animate attributeName="y" from="50" to="10" dur="1s" begin="0s;animOut.end" id="animIn" fill="freeze" />
    <animate attributeName="y" from="10" to="50" dur="1s" begin="animIn.end" id="animOut" fill="freeze" />
  </rect>
  <rect x="20" y="30" width="10" height="120" fill="green">
    <animate attributeName="y" from="40" to="10" dur="1s" begin="0.2s;animOut2.end" id="animIn2" fill="freeze" />
    <animate attributeName="y" from="10" to="40" dur="1s" begin="animIn2.end" id="animOut2" fill="freeze" />
  </rect>
  <rect x="40" y="40" width="10" height="110" fill="yellow">
    <animate attributeName="y" from="40" to="1" dur="1.2s" begin="0.1;animOut3.end" id="animIn3" fill="freeze" />
    <animate attributeName="y" from="1" to="40" dur="1.2s" begin="animIn3.end" id="animOut3" fill="freeze" />
  </rect>
  <rect x="60" y="40" width="10" height="110" fill="orange">
    <animate attributeName="y" from="40" to="1" dur="1.2s" begin="0.4s;animOut4.end" id="animIn4" fill="freeze" />
    <animate attributeName="y" from="1" to="40" dur="1.2s" begin="animIn4.end" id="animOut4" fill="freeze" />
  </rect>
  <rect x="80" y="40" width="10" height="110" fill="red">
    <animate attributeName="y" from="40" to="1" dur="1.2s" begin="0.1s;animOut5.end" id="animIn5" fill="freeze" />
    <animate attributeName="y" from="1" to="40" dur="1.2s" begin="animIn5.end" id="animOut5" fill="freeze" />
  </rect>
</svg>
  )
}
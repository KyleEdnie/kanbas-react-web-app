function FunctionParenthesisAndParameters() {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return(<div>
    <h3>ParenthesisAndParameters</h3>
    twoSquared = {twoSquared}<br/>
    square(2) = {square(2)}<br/>
    threePlusOne = {threePlusOne}<br/>
    plusOne(2) = {plusOne(2)}<br/>
  </div>)
}
export default FunctionParenthesisAndParameters;

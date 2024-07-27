import styled from "styled-components"

const Rules = () => {
  return (
    <ShowRules>
        <h4>How to play dice game?</h4>
        <ol>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After click on  dice  if selected number is equal to dice number you will get same point as dice</li>
            <li>If you get wrong guess then  2 point will be dedcuted</li>
        </ol>
    </ShowRules>
  )
}

export default Rules

const ShowRules=styled.div`
    width: 794px;
    background-color: #FBF1F1;
    padding: 20px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;

    li{
        font-size: 16px;;
    }
    
`
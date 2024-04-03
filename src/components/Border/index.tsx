export type Props = {
  bordercolor?: string;
}

const Border = ({bordercolor}: Props) => {
  let color = "2px solid transparent"
  
    if(bordercolor) {
       color = ("2px solid" + bordercolor)
    }
    
  return(
    <div style={{borderTop: color, margin: "16px 0 16px"}} />
  )
}

export default Border
export interface IBorderProps  {
  bordercolor?: string
}

const Hr = ({bordercolor}: IBorderProps) => {
    
  return(
    <div style={{
      borderTop: `2px solid ${bordercolor}`, margin: "16px 0 16px"
    }} />
  )
}

export default Hr
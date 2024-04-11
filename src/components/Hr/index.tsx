export type Props = {
  bordercolor?: string;
}

const Hr = ({bordercolor}: Props) => {
    
  return(
    <div style={{
      borderTop: `2px solid ${bordercolor}`, margin: "16px 0 16px"
    }} />
  )
}

export default Hr
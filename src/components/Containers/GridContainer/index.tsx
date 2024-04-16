import { ReactNode } from "react"
import { Grid } from "./styles"

export interface IGridProps {
  gridsm?: string
  gridmd?: string
  gridlg?: string
  gap?: string
  children?: ReactNode
}

const GridContainer = ({ children, gap, gridlg, gridmd, gridsm }: IGridProps) => {
  return (
    <Grid
      gap={gap}
      gridsm={gridsm}
      gridmd={gridmd}
      gridlg={gridlg}
    >
      {children}
    </Grid>
  )
}

export default GridContainer
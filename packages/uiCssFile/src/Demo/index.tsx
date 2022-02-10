import './index.scss'

interface DemoProps {
  title?: string | any[]
}

export const Demo = ({ title = 'aaa' }: DemoProps) => {
  return <div className={'bb'}>{title || ''}Deno</div>
}

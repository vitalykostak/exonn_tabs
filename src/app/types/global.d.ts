declare module '*.scss' {
    const content: Record<string, string>
    export default content
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare module '@agjs/react-right-click-menu'

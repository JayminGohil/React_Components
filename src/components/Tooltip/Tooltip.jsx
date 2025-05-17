import '../../styles/Tooltip.css'
import Badge from '../Badges/Badge'
import { FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * @param {object} props
 * @param {React.ElementType} props.icon - The icon component to display
 * @param {boolean} [props.close=true] - Whether tooltip auto-closes
 * @param {string} [props.title] - The title of the tooltip
 * @param {string} [props.subtitle] - The subtitle text
 * @param {"bold" | "light"} [props.variant] - Variant Of Theme (Bold is Default)
 * @param {"blue" | "pink" | "green"} [props.col] - Color Of Theme (Black/White Default)
 * @param {React.ReactNode} props.children - The content/component that triggers the tooltip
 */

export default function Tooltip({children,close=true,icon: Icon,title="Title",subtitle,col,variant,...rest}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState({});
    const [positionClass, setPositionClass] = useState('center');
    const tooltipRef = useRef(null);
    
    const adjustTooltipPosition = useCallback(() => {
        const tooltip = tooltipRef.current;
        if (!tooltip) return;
        const rect = tooltip.getBoundingClientRect();
        const padding = 8;
        let style = { left: '50%', transform: 'translateX(-50%)' };
        let posClass = 'center';

        if (rect.left < padding) {
            style = { left: `${padding}px`, transform: 'none' };
            posClass = 'left';
        } else if (rect.right > window.innerWidth - padding) {
            style = { right: `${padding}px`, left: 'auto', transform: 'none' };
            posClass = 'right';
        }
        setTooltipStyle(style);
        setPositionClass(posClass);
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (isVisible) {
            setIsReady(false);
            setTooltipStyle({ left: '50%', transform: 'translateX(-50%)' });
            setPositionClass('center');
            setTimeout(adjustTooltipPosition, 0);
            window.addEventListener('resize', adjustTooltipPosition);
        } else {
            setTooltipStyle({});
            setIsReady(false);
            setPositionClass('center');
            window.removeEventListener('resize', adjustTooltipPosition);
        }
        return () => {
            window.removeEventListener('resize', adjustTooltipPosition);
        };
    }, [isVisible, adjustTooltipPosition]);

    return (
        <>
            <div className="hover-tooltip-wrapper"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => {
                    close && setIsVisible(false)
                }}
                {...rest}
                >
                    
                {children}

                {
                    isVisible && (
                        <div
                            className={`tooltip-container ${variant} ${col} ${positionClass}`}
                            ref={tooltipRef}
                            style={{
                                ...tooltipStyle,
                                visibility: isReady ? 'visible' : 'hidden',
                                pointerEvents: isReady ? 'auto' : 'none',
                            }}
                        >
                            <Icon size={20} /> 
                            {Icon}
                            <div className="tooltip-text-container">
                                <span className="tooltip-title">{title}</span>
                                { subtitle && <span className="tooltip-subtitle">{subtitle}</span> }
                            </div>
                            {!close && <IoClose size={20} onClick={() => setIsVisible(false)} className='pointer'  />}
                            <div className={`tooltip-triangle ${positionClass}`}></div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
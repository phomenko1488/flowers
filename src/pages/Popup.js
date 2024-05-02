import React, {useEffect, useRef} from 'react';
import '../Popup.css';

const Popup = ({onClose,children}) => {
    const ref = useRef();
    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    // Do nothing if clicking ref's element or descendent elements
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            // Add ref and handler to effect dependencies
            // It's worth noting that because the passed-in handler is a new ...
            // ... function on every render that will cause this effect ...
            // ... callback/cleanup to run every render. It's not a big deal ...
            // ... but to optimize you can wrap handler in useCallback before ...
            // ... passing it into this hook.
            [ref, handler]
        );
    }
    useOnClickOutside(ref, onClose);
    return <div className="popup-container" >
            <div className="popup text-center w-25 border rounded-1" ref={ref}>
                <div className="d-flex justify-content-end">
                        <div onClick={onClose} style={{cursor:'pointer'}}>✖</div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
};

export default Popup;
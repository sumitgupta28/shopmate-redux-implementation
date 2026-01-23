import { useEffect } from "react";

export default function useTitle(title) {
    useEffect(() => {
        document.title = { title } ? `${title} - ShopMate` : 'ShopMate';
    }, [title]);
    return null
}

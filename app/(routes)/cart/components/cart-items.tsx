import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
    data:Product
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) =>{
    const cart=useCart();

    const onRemove=()=>{
        cart.removeItem(data.id)
    }
    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.images[0].url} alt="" className="object-cover object-center" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15}/>}/>
                </div>
                <div className="relative pr-9 sm:gird sm:gird-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>
                    <div className="ml-1 text-sm flex">
                        <p className="text-gray-500">
                            {data.color.name}
                        </p>
                        <p className="ml-4 text-gray-500 border-l border-gray-200 pl-4">
                            {data.size.name}
                        </p>
                    </div>
                    <Currency value={data.price}/>
                </div>
            </div>
        </li>
    )
}

export default CartItem
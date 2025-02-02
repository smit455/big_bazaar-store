"use client"

import usePreviewModel from "@/hooks/use-preview-modal"
import Modal from "./ui/modal";
import Gallery from "./gallery";
import Info from "./info";

const PreviewModel = () => {
    const previewModel = usePreviewModel();
    const product = usePreviewModel((state)=>state.data);

    if(!product) return null

    return (
        <Modal open={previewModel.isOpen} onClose={previewModel.onClose}>
            <div className="grid w-full gird-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={product.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={product} />
                </div>
            </div>
        </Modal>
    )
}

export default PreviewModel
import { useRef } from "react";
export function Modal() {
    const dialogRef = useRef(null);

    return (
        <div className="max-w-[90%]">


            <button
                      onClick={() => dialogRef?.current?.showModal()}
            className='bg-[#6438f5] p-3 w-[150px] rounded-md'>
                Request Callback
                </button>
            <dialog
                ref={dialogRef}
                onSubmit={(ev) => {
                    const formData = new FormData(ev.target );

                }}
                onClick={(ev) => {
                    const target = ev.target ;
                    if (target.nodeName === "DIALOG") {
                        target.close();
                    }
                }}
                onClose={(ev) => {
                    const target = ev.target;
                    console.log(target.returnValue);
                }}
                className="inset-0 block w-[90%] translate-y-20 rounded-2xl bg-inherit p-0 text-md opacity-0 transition-[opacity,transform]
        duration-300
        backdrop:backdrop-brightness-[20%] sm:w-[50%] md:w-[80%]
        [&:not([open])]:pointer-events-none [&[open]]:translate-y-0 [&[open]]:opacity-100"
            >
                <form
                    method="dialog"
                    className="bg-white text-center  p-[40px]"

                >
Registration Success
                </form>
            </dialog>
        </div>
    );
}

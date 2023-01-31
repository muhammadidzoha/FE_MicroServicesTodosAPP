import React from 'react'

const EditTodos = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="m-4 grow h-fit bg-[#f8f9fa] p-4 border rounded-lg w-[1024px]">
                <h2 className="text-center text-2xl font-bold">Edit yang harus dilakukan</h2>
                <form className="flex flex-col" id="usrform">
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Nama</label>
                        <img src="" alt="" />
                        <input type="text" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Deskripsi yang akan dilakukan</label>
                        <textarea form="usrform" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none"></textarea>
                        {/* <input type="textarea" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none" /> */}
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-lg font-light">Kapan akan dilakukan</label>
                        <input type="datetime-local" className="bg-[#F5F1FF] border-2 border-[#9475EA] rounded-lg p-4 mb-2 text-2xl focus:outline-none w-fit" />
                    </div>
                    <input type="submit" value="Submit" className="w-fit border-2 border-[#9475EA] rounded-2xl text-2xl px-6 py-3 cursor-pointer self-end mt-auto hover:bg-[#F5F1FF]" />
                </form>
            </div>
        </div>
    )
}

export default EditTodos

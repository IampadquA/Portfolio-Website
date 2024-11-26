"use client";

export const Land = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
        <div className="flex flex-col h-full items-center gap-16 justify-center">
            <div className="flex flex-col heading3 w-auto items-center ">
                <h1>Ben <label style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",}}>Tarık</label> </h1>
                <div className="w-6/12 h-[52px] bg-placeholder">

                </div>
                <h2 className="text-center"> Bir Öğrenci Geliştirici</h2>
                <div className="w-8/12 h-[88px] bg-placeholder">
                </div>
            </div>
            <label className="heading6">
                <label style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}}>Yüksekleri </label>
                Hedefleyen biri
            </label>
        </div>
    </div>
  )
}



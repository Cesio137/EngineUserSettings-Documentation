import { NodePin } from "@components";

export interface FunctionProperties {
    name: string;
    className: string;
    pure: boolean;
    inPins: NodePin[];
    outPins: NodePin[];
}

export function UFunction({
    name,
    className,
    pure,
    inPins,
    outPins,
}: FunctionProperties) {
    return (
        <section className="my-[32px]">
            <div className="inline-block min-w-[140px] rounded-md overflow-hidden bg-neutral-900 shadow-md shadow-black">
                <div
                    className={`px-[12px] pr-[32px] py-0.5 pb-2 flex flex-row gap-x-1 ${
                        pure ? "bg-emerald-600" : "bg-sky-600"
                    }`}
                >
                    <h5
                        className={`!my-0 text-[20px] leading-[18px] font-bold ${
                            pure ? "text-lime-300" : "text-blue-300"
                        } text-shadow-md text-shadow-black`}
                    >
                        𝑓
                    </h5>
                    <div className="flex flex-col justify-center gap-y-1">
                        <h6
                            className={`pt-0.5 text-[13px] leading-[13px] font-bold text-white text-shadow-md text-shadow-black/50`}
                        >
                            {name}
                        </h6>
                        {typeof className !== "undefined" && (
                            <h6 className="text-[12px] leading-[12px] font-normal italic text-neutral-200 text-shadow-md text-shadow-neutral-900/50">
                                Target is {className}
                            </h6>
                        )}
                    </div>
                </div>

                <div className="flex flex-row justify-between px-3 py-3 gap-x-6">
                    <div className="flex flex-col gap-y-3">
                        {typeof inPins !== "undefined" &&
                            inPins.map((val) => {
                                const pinSize =
                                    val.pintype === "exec" ? 14 : 12;
                                return (
                                    <div
                                        className="flex gap-x-1.5 items-center"
                                        key={`root_${val.name}`}
                                    >
                                        <img
                                            src={`/img/blueprints/${val.pintype}_pin.svg`}
                                            className={`!my-0 text-amber-500`}
                                            alt="Input pin"
                                            loading="lazy"
                                            decoding="async"
                                            width={pinSize}
                                            height={pinSize}
                                            key={`pin_${val.name}`}
                                        />
                                        <h6
                                            className="!my-0 text-[12px] leading-[12px] !align-text-bottom font-light text-white"
                                            key={`id_${val.name}`}
                                        >
                                            {val.name}
                                        </h6>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="flex flex-col gap-y-3 items-end">
                        {typeof outPins !== "undefined" &&
                            outPins.map((val) => {
                                const pinSize =
                                    val.pintype === "exec" ? 14 : 12;
                                return (
                                    <div
                                        className="flex gap-x-1.5 items-center"
                                        key={`root_${val.name}`}
                                    >
                                        <h6
                                            className="!my-0 text-[12px] leading-[12px] font-light text-white"
                                            key={`id_${val.name}`}
                                        >
                                            {val.name}
                                        </h6>
                                        <img
                                            src={`/img/blueprints/${val.pintype}_pin.svg`}
                                            className="!my-0"
                                            alt="Output pin"
                                            loading="lazy"
                                            decoding="async"
                                            width={pinSize}
                                            height={pinSize}
                                            key={`pin_${val.name}`}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { NodePin } from "@components";

interface EventProperties {
    name: string;
    showBindNode: boolean;
    outPins: NodePin[];
}

export function UEvents({ name, showBindNode, outPins }: EventProperties) {
    return (
        <section className="flex flex-col items-start gap-y-2 w-auto">
            {typeof showBindNode !== "undefined" && showBindNode && (
                <div className="inline-block min-w-[140px] rounded-md overflow-hidden bg-neutral-900 shadow-md shadow-black">
                    <div className="flex justify-start py-1 gap-x-1 px-[12px] bg-sky-600">
                        <img
                            className="!my-0 w-[16px] h-[16px]"
                            src="/img/blueprints/bind_icon.svg"
                            alt=""
                        />
                        <div className="mr-4 pt-0.5 pb-0.5 flex flex-col gap-y-1">
                            <h6 className="!my-0 !p-0 text-[13px] leading-[13px] font-bold text-white">
                                Bind Event to {name}
                            </h6>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between px-3 py-3 gap-x-6">
                        <div className="flex flex-col gap-y-3">
                            <img
                                src={`/img/blueprints/exec_pin.svg`}
                                className="!my-0"
                                alt="Input pin"
                                loading="lazy"
                                decoding="async"
                                width={14}
                                height={14}
                            />

                            <div className="flex gap-x-1.5">
                                <img
                                    src={`/img/blueprints/object_pin.svg`}
                                    className={`!my-0`}
                                    alt="Input pin"
                                    loading="lazy"
                                    decoding="async"
                                    width={12}
                                    height={12}
                                />
                                <h6 className="!my-0 text-[12px] leading-[12px] !align-text-bottom font-light text-white">
                                    Target
                                </h6>
                            </div>

                            <div className="flex gap-x-1.5">
                                <img
                                    src={`/img/blueprints/delegate_pin.svg`}
                                    className={`!my-0`}
                                    alt="Input pin"
                                    loading="lazy"
                                    decoding="async"
                                    width={12}
                                    height={12}
                                />
                                <h6 className="!my-0 text-[12px] leading-[12px] !align-text-bottom font-light text-white">
                                    Event
                                </h6>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1.5 items-end">
                            <img
                                src={`/img/blueprints/exec_pin.svg`}
                                className="!my-0"
                                alt="Output pin"
                                loading="lazy"
                                decoding="async"
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="inline-block min-w-[140px] rounded-md overflow-hidden bg-neutral-900 shadow-md shadow-black">
                <div className="flex flex-row justify-start py-1 gap-x-1 px-[12px] bg-red-900">
                    <img
                        className="!my-0 w-[16px] h-[16px]"
                        src="/img/blueprints/event_icon.svg"
                        alt=""
                    />
                    <div className="mr-4 pt-0.5 pb-0.5 flex flex-col gap-y-1">
                        <h6 className="!my-0 !p-0 text-[13px] leading-[13px] font-bold text-white">
                            {name}
                        </h6>
                        <h6 className="!my-0 text-[12px] leading-[12px] font-light italic text-yellow-100/60">
                            Custom Event
                        </h6>
                    </div>
                    <div className="flex items-center ml-auto">
                        <img
                            className="!my-0 items-end w-[12px] h-[12px] shadow-md shadow-black/60"
                            src="/img/blueprints/delegate_pin.svg"
                            alt=""
                            width={12}
                            height={12}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between items-end px-3 py-3">
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

import { NodePin } from "@components";

export interface VarProperties {
    pin: NodePin;
}

export function UVar({ pin }: VarProperties) {
    return (
        <section className="inline-block min-w-[140px]">
            <div
                className="rounded-full bg-neutral-800 px-4 py-2
                border-2 border-white/20 bg-gradient-to-b from-[#1f1f1f] to-[#080808] shadow-md shadow-black
                "
            >
                <div className="flex gap-x-1 justify-end">
                    <h6 className="text-[12px]">{pin.name}</h6>
                    <img
                        src={`/img/blueprints/${pin.pintype}_pin.svg`}
                        className="!my-0"
                        alt="Output pin"
                        loading="lazy"
                        decoding="async"
                        width={12}
                        height={12}
                    />
                </div>
            </div>
        </section>
    );
}

export interface NodePin {
    name: string;
    pintype:
        | "exec"
        | "delegate"
        | "boolean"
        | "byte"
        | "int"
        | "int64"
        | "float"
        | "struct"
        | "fstring"
        | "bytearray"
        | "boolarray"
        | "intarray"
        | "int64array"
        | "floatarray"
        | "fstringarray"
        | "objectgarray"
        | "setobject";
}
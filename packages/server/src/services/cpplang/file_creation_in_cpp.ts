import exec from "await-exec";

export default async function file_creation_in_cpp(
  code_body: string,
  file_name: string
) {
  try {
    const { stderr, stdout, err } = await exec(
      `echo ${code_body} >> files/${file_name}.c`
    );
    return {
      file_name: `files/${file_name}.c`,
      module: "file_creation",
      success: true,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

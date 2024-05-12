import argparse
from glob import glob
from pathlib import Path
import os
from typing import Tuple

from PIL import Image

def process_file(
    filename: str,
    outdir: str,
    onlycode: bool,
    maxdim: int = 2048,
    thumbdim: int = 256
) -> Tuple[str, str]:
    """Resize image and create thumbnail and save in desired location.
    
    Args:
        filename: Filename of image to process.
        outdir: Directory to store processed files.
        onlycode: Only return the output filenames. Do not perform resizing.
        maxdim: Maximum number of pixels along longest dimension.
        thumdim: Maximum number of pixels along longest dimesion for thumbnail.
    
    Returns:
        Relative path of output filename and thumbnail.
    """
    fn = os.path.basename(filename) 
    fn_fullsize = os.path.join(outdir, fn)
    fn_thumb = os.path.join(outdir, f"thumb_{fn}")

    if not onlycode:
        img = Image.open(filename)

        fullsize = img.copy()
        fullsize.thumbnail((maxdim, maxdim))
        fullsize.save(fn_fullsize, quality=100)

        thumbnail = img.copy()
        thumbnail.thumbnail((thumbdim, thumbdim))
        thumbnail.save(fn_thumb, quality=60)
    
    return os.path.relpath(fn_fullsize), os.path.relpath(fn_thumb)


def gen_img_code(full: str, thumb: str) -> str:
    # return f'<a href="{full}"><img src="{thumb}"></a>'
    # return f'<img src="{thumb}" data-highres="{full}" />'
    return f"{{ src: '{full}', srct: '{thumb}' }},"


def process_files(indir: str, out: str, onlycode: bool):
    Path(out).mkdir(exist_ok=True)
    files = [process_file(fn, out, onlycode) for fn in glob(f"{indir}/*.jpg")]
    output = "\n".join([gen_img_code(full, thumb) for full, thumb in files])
    with open("./tmphtml", "w") as f:
        f.write(output)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-i", "--indir",  default="./raw")
    parser.add_argument("-o", "--outdir", default="./img") 
    parser.add_argument("-c", "--onlycode", action="store_true")
    args = parser.parse_args()

    process_files(args.indir, args.outdir, args.onlycode)


if __name__ == "__main__":
    main()

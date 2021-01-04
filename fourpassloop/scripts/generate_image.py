import argparse
from glob import glob
from pathlib import Path
import os
from typing import Tuple

from PIL import Image

def process_file(
    filename: str, 
    outdir: str, 
    maxdim: int = 2048, 
    thumbdim: int = 256
) -> Tuple[str, str]:
    img: Image.Image = Image.open(filename)
    fullsize = img.copy()
    fullsize.thumbnail((maxdim, maxdim))

    thumbnail = img.copy()
    thumbnail.thumbnail((thumbdim, thumbdim))
    
    fn = os.path.basename(filename) 
    fn_fullsize = os.path.join(outdir, fn)
    fn_thumb = os.path.join(outdir, f"thumb_{fn}")
    fullsize.save(fn_fullsize, quality=100)
    thumbnail.save(fn_thumb, quality=60)
    
    return os.path.relpath(fn_fullsize), os.path.relpath(fn_thumb)

def process_files(indir: str, out:str):
    Path(out).mkdir(exist_ok=True)
    files = [process_file(fn, out) for fn in glob(f"{indir}/*.jpg")]
    output = "\n".join([
        f'<a href="{full}"><img src="{thumb}"></a>'
        for full, thumb in files
    ])
    with open("./tmphtml", "w") as f:
        f.write(output) 

        


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-i", "--indir",  default="./raw")
    parser.add_argument("-o", "--outdir", default="./img") 
    args = parser.parse_args()

    process_files(args.indir, args.outdir)


if __name__ == "__main__":
    main()

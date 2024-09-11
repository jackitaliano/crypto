from typing import Tuple
import matplotlib.pyplot as plt

def show_bar_chart(categories: list[str], data: list, figsize: Tuple[int,int]=None, layout: str=None):
    if figsize is None:
        figsize = (5, 5)
    if layout is None:
        layout = "constrained"

    fig, ax = plt.subplots(figsize=figsize, layout=layout)

    ax.bar(categories, data)
    plt.show()

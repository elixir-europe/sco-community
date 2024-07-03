---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: Tools
---
<p style="color: #f47d21">{{ page.group }}</p>

## Selection of tools for single-cell and spatial omics

### Multimodal omics & spatial integration
[*SpaTrio*](https://github.com/ZJUFanLab/SpaTrio) is a computational tool based on optimal transport that can align single-cell multi-omics data in space while preserving the spatial topology of the tissue section and local geometry of modality ([Yang et al. Cell Genomics 2023](https://www.sciencedirect.com/science/article/pii/S2666979X23002811)).

[*VortRon*](https://github.com/BIMSBbioinfo/VoltRon) is a spatial omic analysis toolbox for multi-omics integration using spatial image registration. VoltRon is also capable of analyzing multiple types of spatially-aware data modalities.

[*MENDER*](https://www.nature.com/articles/s41467-023-44367-9), Multi-range cEll coNtext DEciphereR, is an unsupervised spatial domain identification tool. MENDER has 3 highlighted points, which are considered major bottlenecks of existing methods:
- multi-slice spatial domain identification that challenges many advanced methods;
- scalability to million-level datasets;
- improved running time efficiency without the need of GPU,

[*yuanzhiyuan/MENDER GitHUb*](https://github.com/yuanzhiyuan/MENDER). 

[*TDEseq*](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-024-03237-3) is a non-parametric statistical method that takes full advantage of smoothing splines basis functions to account for the dependence of multiple time points in scRNA-seq studies, and uses hierarchical structure linear additive mixed models to model the correlated cells within an individual. [*TEDseq GitHub*](https://github.com/fanyue322/TDEseq)

[*scTCP*](https://pubmed.ncbi.nlm.nih.gov/38684178/) is a novel semi-supervised deep clustering model for scRNA-seq data. The method utilizes deep clustering in a low-dimensional feature space and incorporates triplet generation based on known labels and pairwise constraints, to guide the clustering process. To address the issue of data imbalance in the dataset, a weighted cross-entropy optimization model was also introduced. [*LF-Yang/Code GitHub*](https://github.com/LF-Yang/Code)

### Generative AI
[*Geneformer*](https://huggingface.co/ctheodoris/Geneformer), pretrained on a large-scale corpus of about 30 million single-cell transcriptomes enables context-specific predictions in settings with limited data in network biology [*Theodoris et al. Nature 2023*](https://www.nature.com/articles/s41586-023-06139-9).

[*scGPT*](https://github.com/bowang-lab/scGPT)  distills critical biological insights concerning genes and cells. scGPT can be optimized to achieve superior performance across tasks such as cell type annotation, multi-batch integration, multi-omic integration, perturbation response prediction and gene network inference [*Cui et al. Nature Methods (2024)*](https://www.nature.com/articles/s41592-024-02201-0).

[*GPTCelltype*](https://www.nature.com/articles/s41592-024-02235-4), is a GPT-4 automated cell type annotation, provided as an open-source software package with a detailed user manual available at [*Winnie09/GPTCelltype github*](https://github.com/Winnie09/GPTCelltype) repository.

[*PERCEPTION*](https://www.nature.com/articles/s43018-024-00756-7), PERsonalized Single-Cell Expression-Based Planning for Treatments In ONcology, is a precision oncology computational pipeline. PERCEPTION uses publicly available matched bulk and single-cell (sc) expression profiles from large-scale cell-line drug screens. These profiles help build treatment response models based on patients’ sc-tumor transcriptomics. PERCEPTION is available at [*ruppinlab/PERCEPTION GithHUb*](https://github.com/ruppinlab/PERCEPTION).

### Innovative clustering approaches
[*scDAC*](https://pubmed.ncbi.nlm.nih.gov/38603616/) is deep adaptive clustering method coupling the Autoencoder (AE) and the Dirichlet Process Mixture Model (DPMM). [*labomics/scDAC GitHub*](https://github.com/labomics/scDAC) 

### Cell type annotation tools

[*popularVote*](https://tabula-sapiens-portal.ds.czbiohub.org/annotateuserdata), i.e. popV, applies a series of annotation algorithms, each providing a different recipe for transferring labels from Tabula Sapiens to the user-provided data. popV then conducts consensus analysis over these algorithms to estimate the most reproducible annotation of every cell, and to highlight cells that are difficult to label.

[*scATOMIC*](https://www.nature.com/articles/s41467-023-37353-8), single cell annotation of tumour microenvironments in pan-cancer settings, is a comprehensive, pan cancer, TME cell type classifier. It is based on a structured scheme that uses hierarchically organized models and elimination processes, reducing the transcriptomic complexity of the TME multi-cellular system to improve cell classification, [*abelson-lab/scATOMIC GitHub*](https://github.com/abelson-lab/scATOMIC).

[*SifiNet*](https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkae307/7655783?login=true) is a robust and accurate computational pipeline for identifying distinct gene sets, extracting and annotating cellular subpopulations, and elucidating intrinsic relationships among these subpopulations. Uniquely, SifiNet bypasses the cell clustering stage, commonly integrated into other cellular annotation pipelines, thereby circumventing potential inaccuracies in clustering that may compromise subsequent analyses [*jichunxie/sifinet GitHub*](https://github.com/jichunxie/sifinet)

### Data imputation
[*scBP*](https://pubmed.ncbi.nlm.nih.gov/38706317/) is a two-step graph-based feature propagation method. It initially imputes zero values using non-zero values, ensuring that the imputation process does not affect the non-zero values due to dropout. Subsequently, it denoises the entire dataset by leveraging gene-gene and cell-cell relationships in the respective steps.

---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: Tools
---
<p style="color: #f47d21">{{ page.group }}</p>

# Identifying the most appropriate and performant analysis tools

A plethora of SCO tools exist, and yet standards on how to benchmark or evaluate the accuracy of each tool are lacking. Furthermore, most benchmark efforts are focused on certain cell types or tissues.

- The first goal is the identification of a few scRNA-seq datasets for developing the rules to be used for defining datasets suitable to become benchmarking cases. We aim to create a central pipeline to benchmark SCO tools and define standard datasets for such benchmarks. The outcomes of benchmarking and software challenges allow data scientists to make an informed decision on the software to be used in their analytical workflows.
- To facilitate findability and usability, we aim to contribute to tool registries and provide portable software environments of the most commonly used tools/workflows.
- In the long term, we aim to provide cloud deployable analysis pipelines that utilise Galaxy and Chipster platforms, as well as providing curated datasets for user driven benchmark on the OpenEBench infrastructure.


## Benchmark experiments

We are developing a set of benchmarking experiments focusing on multi-modalities and multi-omics for validation of bioinformatics tools in the field of oncology.


### BE1

We are performing a 10XGenomics scRNAseq experiment including the following elements:

-  PC9 (EGFR Del19, activating mutation, PMID: [Simonetti et al. 2010](https://pubmed.ncbi.nlm.nih.gov/21167064/) 
-  A549 (KRAS p.G12S, growth and proliferation,  PMID: [Yoon et al. 2010](https://pubmed.ncbi.nlm.nih.gov/20358631/) 
-  NCI-H596 (MET Del14 , enhanced protection from apoptosis and cellular migration PMID: [Cerqua et al. 2022](https://pubmed.ncbi.nlm.nih.gov/35636967/) 
-  NCI-H1395 (BRAF p.G469A, gain of function, resistant to all tested MEK +/− BRAF inhibitors, PMID: [Negrao et al. 2020](https://pubmed.ncbi.nlm.nih.gov/32540409/)) 
-  DV90 (ERBB2 p.V842I, increases kinase activity, PMID: [Boese et al. 2013](https://pubmed.ncbi.nlm.nih.gov/23220880/) 
-  HCC78 (SLC34A2-ROS1 Fusion, ROS1 inhibitors have antiproliferative effect PMID: [Davies et al. 2012](https://pubmed.ncbi.nlm.nih.gov/22919003/) 
-  [EML4-ALK Fusion-A549 Isogenic Cell](https://www.nature.com/articles/d42473-019-00011-z) 
-  White cells from donor buffy coat (PBMC)

<img border="0" src="../../images/fig1_tools_BE1.jpg" width="500px" style="display: block; margin-left: auto; margin-right: auto">

The above figure shows the pathways underlying to the mutations characterising the seven tumor cell lines.
PBMC will be marked with Biolegend TotalSeq™-B human universal cocktail v1.0, to annotate immunological cell types thanks to the help of an experienced immunologist. 
10XGenomics analysis will be performed using CellPlex 10XGenomics technology, allowing samples labelling.

Count tables of the all experiment will be accessible via a Skiny App to allow user to build a dataset encomplassing at various ratio the different 







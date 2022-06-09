-- Colocar um Novo Vilão

insert  INTO TB_VILAO (NM_VILAO,DS_MALDADE,BT_SUPER_PODER)
VALUES ('TANTO FAZ','TANTO FAZ',TRUE);

-- Consultar Vilão

Select 
id_vilao        id,
nm_vilao		nome,
ds_maldade		maldade,
bt_super_poder	TemPoder
from tb_vilao;
